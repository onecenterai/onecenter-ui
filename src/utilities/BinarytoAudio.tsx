async function BinarytoAudio(data: any, audioDone?: () => void) {
  const audioContext = new AudioContext();

  try {
    const decodedData = await audioContext.decodeAudioData(data); // Pass the binary data directly
    const source = audioContext.createBufferSource();
    source.buffer = decodedData;
    source.connect(audioContext.destination);
    source.start();
    source.addEventListener("ended", () => {
      if (audioDone) {
        audioDone();
      }
    });
  } catch (error) {
    console.error("Error decoding audio data:", error);
  }
}

export default BinarytoAudio;
