import { useTimer } from "react-timer-hook";
interface TimerProps {
  expiryTimestamp: Date;
  handleExpire: Function;
}
function Timer({ expiryTimestamp, handleExpire }: TimerProps) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      handleExpire();
    },
  });
  return (
    <>
      {/* {minutes}
      {seconds} */}
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </>
  );
}

export default Timer;
