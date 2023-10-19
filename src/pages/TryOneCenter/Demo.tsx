import { Box, Container, Grid } from "@mui/material";
import "react-sip-phone/dist/index.css";
import Search from "../../components/Search";
import EngageCall from "../../components/Engage/EngageCall";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPartners } from "../../slices/PartnerSlice";
import { AppDispatch } from "../../store";
import { Link } from "react-router-dom";

function Demo() {
  const availablePartners = useSelector((state) => state.Partners.partners);
  localStorage.setItem("partners", JSON.stringify(availablePartners));
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPartners());

    //eslint-disable-next-line
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={12}>
            <Search />
          </Grid>
          {availablePartners?.map((partner) => {
            return (
              <Grid item md={4}>
                <Link to={`/tryonecenter/${partner.id}`}>
                  <Card
                    iconContainerWidth={"7rem"}
                    name={partner.name}
                    website={partner.website}
                    description={partner.description}
                    logo={partner.logo}
                    category={partner.category}
                    // primaryBtn={"Make Call"}
                    // primaryFunc={() => {
                    //   makeCall();
                    // }}
                    // btnDisable={callButtonStatus === false}
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Demo;
