import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import Caller from "./components/Caller";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <MobileNavbar /> */}
        <Caller />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
