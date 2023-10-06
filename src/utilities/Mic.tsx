import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { micToggle, postUserReview } from "../slices/WaitListSlice";
import { AppDispatch } from "../store";

const Mic = () => {
  const mediaRecorderRef = useRef<null | MediaRecorder>(null);
  const mic = useSelector((state: any) => state.WaitList.startMic);
  const dispatch = useDispatch<AppDispatch>();
  console.log(mic);

  const startRecording = () => {
    const MIN_DECIBELS = -45;

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder; // Set mediaRecorder ref
      const chunks: BlobPart[] = [];
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
      let silenceTimer: any = null;

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
            dispatch(micToggle(false));
            stopRecording();
          }, 2000);
        }

        window.requestAnimationFrame(detectSound);
      };

      window.requestAnimationFrame(detectSound);

      recorder.addEventListener("stop", () => {
        clearTimeout(silenceTimer);
        const audioBlob = new Blob(chunks, { type: "audio/wav" });
        console.log(audioBlob.type);
        dispatch(postUserReview(audioBlob));
        // const url = URL.createObjectURL(audioBlob);
        // setAudioUrl(url);
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
    if (mic) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [mic]);

  return (
    <div>
      {/* <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      {audioUrl && <audio controls src={audioUrl}></audio>} */}
    </div>
  );
};

export default Mic;
