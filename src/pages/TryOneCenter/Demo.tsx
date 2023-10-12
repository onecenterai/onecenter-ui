import Drawer from "./Drawer";
import Card from "./Card";
import { Box, Container, Grid } from "@mui/material";
// import { ReactSipPhone } from "react-sip-phone";
import "react-sip-phone/dist/index.css";
import { StyledInput } from "../../styled-components/styledInput";
// import { useDispatch } from "react-redux";

function Demo() {
  return (
    <Box>
      <Container>
        {/* <StyledInput fullWidth /> */}
        <Grid container spacing={5}>
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
