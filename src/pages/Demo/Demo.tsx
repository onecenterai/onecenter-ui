import Drawer from "./Drawer";
import Card from "./Card";
import { Box } from "@mui/material";
// import { ReactSipPhone } from "react-sip-phone";
import "react-sip-phone/dist/index.css";
// import { useDispatch } from "react-redux";

function Demo() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <div style={{ display: "none" }}>
        <ReactSipPhone
          name="onecenter"
          sipCredentials={{
            sipuri: "onecenter.sip.jambonz.cloud",
            password: "1XonecenterX1",
          }}
          sipConfig={{
            websocket: "wss://jambonz.org:8443",
            defaultCountryCode: "234",
          }}
          phoneConfig={{
            disabledFeatures: [],
          }}
          appConfig={{
            appSize: "default",

            mode: "default",
          }}
          width={400}
        />
      </div> */}

      <Drawer />
      <Card />
    </Box>
  );
}

export default Demo;
