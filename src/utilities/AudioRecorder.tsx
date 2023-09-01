import { useState, useRef, useEffect } from "react";

export default function AudioRecorder() {
  const [audioUrl, setAudioUrl] = useState("");
  const mediaRecorderRef = useRef(null);

  const startRecording = () => {
    const MIN_DECIBELS = -45;

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      const chunks = [];
      recorder.addEventListener("dataavailable", (event) => {
        chunks.push(event.data);
      });

      const audioContext = new AudioContext();
      const audioStreamSource = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.minDecibels = MIN_DECIBELS;
      audioStreamSource.connect(analyser);

      const bufferLength = analyser.frequencyBinCount;
      const domainData = new Uint8Array(bufferLength);

      let silenceDetected = false;
      let silenceTimer = null;

      const detectSound = () => {
        analyser.getByteFrequencyData(domainData);

        const soundDetected = Array.from(domainData).some((value) => value > 0);

        if (soundDetected) {
          clearTimeout(silenceTimer);
          silenceDetected = false;
          console.log("sound detected");
        } else if (!silenceDetected) {
          silenceDetected = true;
          silenceTimer = setTimeout(() => {
            console.log("Silence detected for more than 2 seconds");
            stopRecording();
          }, 2000);
        }

        window.requestAnimationFrame(detectSound);
      };

      window.requestAnimationFrame(detectSound);

      recorder.addEventListener("stop", () => {
        clearTimeout(silenceTimer);
        const audioBlob = new Blob(chunks);
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      });

      recorder.start();
    });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        stopRecording();
      }
    };
  }, []);

  return { audioUrl, startRecording, stopRecording };
}
