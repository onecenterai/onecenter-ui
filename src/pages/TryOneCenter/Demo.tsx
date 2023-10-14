import Card from "./Card";
import { Box, Container, Grid } from "@mui/material";
import "react-sip-phone/dist/index.css";
import Search from "../../components/Search";
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
