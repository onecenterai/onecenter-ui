import { Container, Grid, Paper } from "@mui/material";

function Card() {
  return (
    <div>
      <Container>
        <Paper>
          <Grid container>
            <Grid item>
              <Container>
                <img src="./images/schoola.png" style={{ width: "100%" }} />
              </Container>
            </Grid>
            <Grid item>
              <Container>
                <h1>School A</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default Card;
