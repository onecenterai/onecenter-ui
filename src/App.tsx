import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import Caller from "./components/Caller";
import MobileNavbar from "./components/MobileNavbar";
import Demo from "./pages/Demo/Demo";
import { SipProvider } from "react-sip";
import Company from "./pages/Company/Company";
import SignIn from "./pages/AuthUi/SignIn/SignIn";
import Signup from "./pages/AuthUi/SignUp/Signup";
import UploadResource from "./pages/Dashboard/UploadResource";
import Resources from "./pages/Dashboard/Resources/Resources";
function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <SipProvider
      host="sip.onsip.com"
      port={7443}
      pathname="wss://edge.sip.onsip.com" // Path in socket URI (e.g. wss://sip.example.com:7443/ws); "" by default
      user="ibrahim@onecenter.onsip.com"
      password={"Jns3MNTxENExqbkV"} // usually required (e.g. from ENV or props)
      autoRegister={true} // true by default, see jssip.UA option register
      autoAnswer={false} // automatically answer incoming calls; false by default
      iceRestart={false} // force ICE session to restart on every WebRTC call; false by default
      sessionTimersExpires={120} // value for Session-Expires header; 120 by default
      debug={false} // whether to output events to console; false by default
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {location.pathname != "/signup" && location.pathname != "/signin" && location.pathname != "/upload" ? (
            <>
              <Navbar />
              <MobileNavbar />
            </>
          ) : null}
          <Caller />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/company" element={<Company />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/upload" element={<UploadResource />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </SipProvider>
  );
}

export default App;
