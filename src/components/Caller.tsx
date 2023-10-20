import { Box, IconButton, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Timer from "../utilities/Timer";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      position: "fixed",
      zIndex: 2,
      transition: "all ease-in-out .7s",
      width: "50rem",
      height: "9rem",
      borderRadius: "5rem",
      backgroundColor: "rgba(17, 25, 40, 0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        width: "35rem",
        height: "7rem",
      },
    },
    calleravatar: {
      height: "7rem",
      width: "7rem",
      borderRadius: "50%",
      backgroundColor: theme.palette.secondary.main,
      //   opacity: 0.7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all ease-in-out .4s",

      "&:hover": {
        scale: "1.05",
        transition: "all ease-in-out .4s",
      },
      [theme.breakpoints.down("sm")]: {
        height: "5rem",
        width: "5rem",
      },
    },
    callinfo: {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
    },
    dot: {
      height: "1rem",
      width: "1rem",
      borderRadius: "50%",
      animationName: "my-animation",
      animationDuration: "1s",
      animationDirection: "alternate",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
    },
  };
});

interface callProps {
  info: string;
  handleCallDisconnect: () => void;
  callerDisplay: boolean;
  logo: string;
}
function Caller({ info, handleCallDisconnect, callerDisplay, logo }: callProps) {
  const classes = useStyles();
  const time = new Date();
  // const callerDisplay = useSelector((state: any) => state.WaitList.callerComponent);
  const mic = useSelector((state: any) => state.WaitList.startMic);
  console.log(callerDisplay);
  time.setSeconds(time.getSeconds() + 30);
  return (
    <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box className={classes.container} sx={{ top: !callerDisplay ? "80px" : "-180px" }}>
        <Box sx={{ display: "flex", gap: "1rem", padding: "0.8rem" }}>
          <Box className={classes.calleravatar}>
            <img src={logo} alt="" style={{ width: "80%", objectFit: "contain" }} />
          </Box>
          <Box className={classes.callinfo}>
            <Box className={classes.dot} sx={{ backgroundColor: info == "Connected" ? "green" : "orange" }}></Box>
            <Typography variant="h6" sx={{ color: "white", marginRight: ".2rem" }}>
              {info}
            </Typography>
            <Typography variant="h5" color="white">
              {mic ? (
                <Timer
                  expiryTimestamp={time}
                  handleExpire={() => {
                    console.log("hello");
                  }}
                />
              ) : (
                "--:--"
              )}
            </Typography>
          </Box>
        </Box>

        <IconButton>
          <Box className={classes.calleravatar} onClick={handleCallDisconnect}>
            <img src="/icons/telephone.png" alt="" width="60%" />
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Caller;
