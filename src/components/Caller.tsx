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
    },
    callinfo: {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
    },
    dot: {
      height: "1rem !important",
      width: "1rem !important",
      borderRadius: "50%",
      animationName: "my-animation",
      animationDuration: "1s",
      animationDirection: "alternate",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
    },
  };
});
function Caller() {
  const classes = useStyles();
  const time = new Date();
  const callerDisplay = useSelector((state: any) => state.WaitList.callerComponent);
  console.log(callerDisplay);
  time.setSeconds(time.getSeconds() + 3);
  return (
    <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box className={classes.container} sx={{ top: callerDisplay ? "80px" : "-100px" }}>
        <Box sx={{ display: "flex", gap: "1rem", padding: "0.8rem" }}>
          <Box className={classes.calleravatar}>
            <img src="./icons/logoicon.svg" alt="" style={{ height: "6rem", width: "6rem", objectFit: "contain" }} />
          </Box>
          <Box className={classes.callinfo}>
            <Box className={classes.dot} sx={{ backgroundColor: "red" }}></Box>
            <Typography variant="h5" color="white">
              <Timer
                expiryTimestamp={time}
                handleExpire={() => {
                  console.log("hellow");
                }}
              />
            </Typography>
          </Box>
        </Box>

        <IconButton>
          <Box className={classes.calleravatar}>
            <img src="./icons/telephone.png" alt="" width="60%" />
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Caller;
