import "regenerator-runtime/runtime";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postUserReview } from "../slices/WaitListSlice";
import { AppDispatch } from "../store";
// @ts-ignore
import { ReactMic } from "@cleandersonlobo/react-mic";

interface RecordAudioProps {
  record: boolean;
}
function RecordAudio({ record }: RecordAudioProps) {
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const onStop = (recordedBlob: any) => {
    const blob = new Blob([recordedBlob.blob], {
      type: recordedBlob.blob.type,
    });
    setRecordedAudio(blob);
  };
  useEffect(() => {
    if (recordedAudio) {
      dispatch(postUserReview(recordedAudio));
    }
  }, [recordedAudio]);

  return (
    <div>
      <ReactMic record={record} onStop={onStop} />
      {recordedAudio && <audio controls src={URL.createObjectURL(recordedAudio)}></audio>}{" "}
    </div>
  );
}

export default RecordAudio;
