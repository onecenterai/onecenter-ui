import Drawer from "./Drawer";
import Card from "./Card";
import { Box, Container, Grid } from "@mui/material";
// import { ReactSipPhone } from "react-sip-phone";
import "react-sip-phone/dist/index.css";
import { StyledInput } from "../../styled-components/styledInput";
import { ClassNames } from "@emotion/react";
import Search from "../../components/Search";
// import { useDispatch } from "react-redux";
import { EngageCallFunctions } from "../../components/Engage/EngageCallFunctions";
import EngageCall from "../../components/Engage/EngageCall";

function Demo() {
  return (
    <Box>
      <Container>
        <Search />
        <EngageCall />
        <Grid container spacing={5}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
    </Box>
  );
}

export default Demo;
