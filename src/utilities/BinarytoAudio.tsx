async function BinarytoAudio(data: any, audioDone?: () => void) {
  const audioContext = new AudioContext();

  try {
    const buffer = await data;
    const decodedData = await audioContext.decodeAudioData(buffer);
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
