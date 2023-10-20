// @ts-nocheck
import { useRef, useState, useEffect } from "react";
import { engageDigitalClickToCallConfiguration } from "./engageDigitalClickToCallConfigration";
import { AppBar, Box, Button, Container, Grid, Modal, Toolbar, Typography } from "@mui/material";
import Caller from "../Caller";
import Card from "../../pages/TryOneCenter/Card";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  flexDirection: "column",
  bgcolor: "background.paper",
  border: "0",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

function EngageCall({ partnerId, partner }) {
  const [remoteStream, _setRemoteStream] = useState(null);
  const remoteStreamRefApp = useRef(remoteStream);
  const [localStream, _setLocalStream] = useState(null);
  const [session, setSession] = useState(null);
  const [info, setInfo] = useState(null);
  const [callButtonStatus, setcallButtonStatus] = useState(false);
  const [engageDigital, setEngageDigital] = useState(null);
  const localStreamRefApp = useRef(localStream);
  const remoteStreamRef = useRef(null);
  const localStreamRef = useRef(null);
  let isEngageDigitalSdkLoaded = false;
  let engageDigitalClient;
  let engageDigitalSession;

  let userId = JSON.parse(localStorage.getItem("data"))?.user?.id;

  function connectToEngageDigital() {
    const engageDomain = engageDigitalClickToCallConfiguration.domain;

    if (isEngageDigitalSdkLoaded) {
      console.log("Partner ID:", partnerId);
      const userIdentity = `${userId}_${partnerId}`;
      console.log("SIP Identity:", userIdentity);

      const config = {
        log: {
          console: { enable: engageDigitalClickToCallConfiguration.consoleLog },
        },
        needRegistration: false,
      };

      engageDigitalClient = new window.EngageDigital.EngageDigitalClient(userIdentity, engageDomain, config);
      setEngageDigital(engageDigitalClient);
      registerForEngageDigitalClientEvents();
    } else {
      loadEngageDigitalSDK(engageDomain);
    }
  }

  function registerForEngageDigitalClientEvents() {
    /**
     * The Ready event is emitted when the SDK is initialized successfully and is ready
     * for operation. Once this event is received connect() API can be invoked.
     */
    engageDigitalClient.addEventHandler("ready", () => {
      engageDigitalClient.connect();
    });

    engageDigitalClient.addEventHandler("connecting", () => {
      updateStatus("Connecting to Engage Digital...");
    });

    /*
     * This event is being called when connectivity is established for the first time.
     */
    engageDigitalClient.addEventHandler("connected", () => {
      updateStatus("Connected to Engage Digital");
      setcallButtonStatus(true);
      console.log("Your Sip Identity : " + engageDigitalClient.getUri().toString());
    });

    /*
     * This event is emitted when the Connection with the engage domain is lost
     */
    engageDigitalClient.addEventHandler("disconnected", () => {
      updateStatus("Disconnected from Engage Digital");
    });

    /*
     * This event is emitted when the sdk tries to re-connect when the already established connection is lost
     */
    engageDigitalClient.addEventHandler("reconnecting", () => {
      updateStatus("Re-connecting to Engage Digital");
    });

    /**
     * Fired when the connection is re-established
     */
    engageDigitalClient.addEventHandler("reconnected", () => {
      updateStatus("Re-connected to Engage Digital");
    });

    engageDigitalClient.addEventHandler("failed", (error) => {
      updateStatus(JSON.stringify(error));
    });

    engageDigitalClient.addEventHandler("errorinfo", ({ errorMessage }) => {
      updateStatus(errorMessage);
    });

    /**
     * For an incoming/outgoing call this event will be triggered.
     * This event will carry an instance of EngageDigitalSession, on that call related events can be registered.
     * If the new session is for an incoming call EngageDigitalSession's acceptCall() API can be invoked to accept the call.
     */
    engageDigitalClient.addEventHandler("newRTCSession", onNewEngageSession);
  }

  function loadEngageDigitalSDK(engageDomain) {
    updateStatus("Loading Engage Digital sdk...");

    const sdkScriptElement = document.createElement("script");

    sdkScriptElement.type = "text/javascript";
    sdkScriptElement.async = false;
    sdkScriptElement.src = `https://${engageDomain}/engageDigital.js`;

    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(sdkScriptElement, firstScriptTag);

    sdkScriptElement.addEventListener("load", () => {
      isEngageDigitalSdkLoaded = true;
      updateStatus("Engage Digital sdk is loaded");
      connectToEngageDigital();
    });

    sdkScriptElement.addEventListener("error", () => {
      updateStatus(`Failed to load ${sdkScriptElement.src}. Is the given domain proper?`);
    });
  }

  function makeCall() {
    const callToNum = engageDigitalClickToCallConfiguration.callToNum;
    try {
      if (engageDigital) {
        engageDigital.makeCall(callToNum, {
          mediaConstraints: {
            audio: true,
            video: engageDigitalClickToCallConfiguration.callType === "video" ? true : false,
          },
          joinWithVideoMuted: engageDigitalClickToCallConfiguration.joinWithVideoMuted,
        });
      }
    } catch (error) {
      updateStatus("Call: Provide valid phone number");
      console.log("Error in make call : " + error);
    }
  }

  function disconnectCall() {
    if (session) {
      session.disconnectCall();
      setSession(null);
    }
  }

  function onNewEngageSession(session) {
    console.log("Got newRTCSession event direction is %s", session.getDirection());

    engageDigitalSession = session;
    setSession(session);

    /**
     * Can play some media file indicates call is ringing state
     */
    engageDigitalSession.addEventHandler("ringing", () => {
      updateStatus(" Ringing");
    });

    engageDigitalSession.addEventHandler("connecting", () => {
      updateStatus("Connecting");
    });
    /**
     * Call is connected, can use this event to update the status of call in UI
     */
    engageDigitalSession.addEventHandler("connected", () => {
      updateStatus("Connected");
    });

    /**
     * Call is disconnected by the client, can use this event to update the status of call in UI
     */
    engageDigitalSession.addEventHandler("disconnected", () => {
      updateStatus("Call: DisConnected");

      setSession(null);
    });

    /**
     * Call is disconnected by the remote user, can use this event to update the status of call in UI
     */
    engageDigitalSession.addEventHandler("peerdisconnected", () => {
      updateStatus("Call: Remote party disconnected");

      setSession(null);
    });

    /**
     * Call is failed
     */
    engageDigitalSession.addEventHandler("failed", () => {
      //Close the dialog if its an incoming call and user has not accepted the call.
      //var $confirm = $("#incomingCallDialog");
      //$confirm.modal("hide");
      setSession(null);
      updateStatus("Call: Failed");
    });

    /**
     * On this event attach your local stream to the local video element
     */
    engageDigitalSession.addEventHandler("localstream", ({ stream }) => {
      updateStatus("Call: Got Local video");
      if (localStreamRefApp.current) {
        setLocalStreamHandler(stream);
      } else {
        setLocalStream(stream);
      }
    });

    engageDigitalSession.addEventHandler("localvideoadded", ({ stream }) => {});

    engageDigitalSession.addEventHandler("localvideoremoved", ({ stream }) => {});

    /**
     * On this event attach remote party's stream to the remote video element
     */
    engageDigitalSession.addEventHandler("remotestream", ({ stream }) => {
      updateStatus("Call: Got Remote video");
      const remoteStreamRef = document.getElementById("remoteStream");
      if (remoteStreamRef) {
        if (remoteStreamRef.srcObject !== null) {
          if (stream.getVideoTracks().length > 0) {
            stream.getVideoTracks()[0].enabled = false;
          }
          remoteStreamRef.onloadedmetadata = function () {
            const tracks = stream.getVideoTracks();

            for (let i = 0; i < tracks.length; ++i) {
              tracks[i].enabled = true;
            }
          };

          remoteStreamRef.srcObject = null;
          remoteStreamRef.srcObject = stream;
        } else {
          setRemoteStream(stream);
        }
      } else {
        setRemoteStream(stream);
      }
    });

    engageDigitalSession.addEventHandler("remotevideoadded", ({ stream }) => {
      console.log("Got remotevideoadded event");
    });

    engageDigitalSession.addEventHandler("remotevideoremoved", ({ stream }) => {
      console.log("Got remotevideoremoved event");
    });

    /**
     * Its an Incoming call, need to invoke acceptCall API on EngageDigitalSession.
     */
    if (engageDigitalSession.getDirection() === "incoming") {
      handleIncomingCall();
    }
  }

  function setLocalStreamHandler(stream) {
    const localStreamRef = document.getElementById("localStream");
    if (localStreamRef) {
      localStreamRef.srcObject = null;
      localStreamRef.srcObject = stream;
    } else {
      setLocalStream(stream);
    }
  }

  function setLocalStream(data) {
    localStreamRefApp.current = data;
    _setLocalStream(data);
  }

  function setRemoteStream(data) {
    remoteStreamRefApp.current = data;
    _setRemoteStream(data);
  }

  function updateStatus(status) {
    console.log(status);
    setInfo(status);
  }

  function handleIncomingCall() {
    updateStatus("Incoming call....");
  }

  useEffect(() => {
    if (localStreamRef && localStreamRef.current) {
      localStreamRef.current.srcObject = null;
      localStreamRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteStreamRef && remoteStreamRef.current) {
      if (remoteStream) {
        if (remoteStream.getVideoTracks().length > 0) {
          console.log("remoteStream.getVideoTracks()", remoteStream.getVideoTracks());
          remoteStream.getVideoTracks()[0].enabled = false;
        }
        remoteStreamRef.current.onloadedmetadata = function () {
          const tracks = remoteStream.getVideoTracks();

          for (let i = 0; i < tracks.length; ++i) {
            tracks[i].enabled = true;
          }
        };
      }
      remoteStreamRef.current.srcObject = null;
      remoteStreamRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  useEffect(() => {
    connectToEngageDigital();
  }, []);
  return (
    <div className="App">
      <AppBar position="fixed" color="inherit" sx={{ display: "none" }}>
        {/* <Toolbar className="toolbar"> */}
        {/* <a href="https://www.radisys.com" rel="noopener noreferrer" target="_blank">
            <img src={logo} className="logo" alt="logo" />
          </a> */}

        <div className="maintitle">Click-to-Call Demo Application</div>

        <div>
          {session?._sessionState !== "connected" || session === null ? (
            <Button disabled={callButtonStatus === false} className="call" onClick={() => makeCall()} color="primary" variant="contained" size="small">
              Call
            </Button>
          ) : (
            <Button className="endCall" onClick={() => disconnectCall()} color="secondary" variant="contained" size="small">
              EndCall
            </Button>
          )}
        </div>
      </AppBar>

      <div style={{ width: "100%" }}>
        <Grid
          container
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            background: "transparent",
            height: "0px",
          }}
        >
          <Grid justifyContent="center" item xs={3} sm={3} md={3} style={{ marginTop: "15vh", display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "5vh" }}>
              <Caller
                logo={partner?.logo}
                info={info}
                callerDisplay={info == "Connecting" || info == "Connected" || info == "Ringing" ? false : true}
                handleCallDisconnect={() => {
                  disconnectCall();
                }}
              />
              <audio
                ref={remoteStreamRef}
                autoPlay
                loop
                playsInline
                id="remoteStream"
                style={{
                  objectFit: "contain",
                  minHeight: "40vh",
                  minWidth: "78%",
                  maxHeight: "38vh",
                  justifyContent: "center",
                  background: "rgb(241, 239, 239)",
                  marginBottom: "5vh",
                  display: "none",
                }}
              ></audio>
            </div>
          </Grid>
        </Grid>
        <Container className="center-center" sx={{ height: "50rem !important" }}>
          <Card
            iconContainerWidth={"10rem"}
            name={partner?.name}
            website={partner?.website}
            description={partner?.description}
            logo={partner?.logo}
            category={partner?.category}
            primaryBtn={`Call ${partner?.name ? partner?.name : ""}`}
            primaryFunc={() => {
              makeCall();
            }}
            btnDisable={callButtonStatus === false}
          />
        </Container>
      </div>
    </div>
  );
}

export default EngageCall;
