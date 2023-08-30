import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <footer style={{ display: "block" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between", padding: "2rem 0rem", borderTop: "1px solid #E5E7EB" }}>
        <Typography variant="h6" color="secondary">
          Copyright © 2023 OneCenter.ai
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <img src="./icons/twitter.svg" width="20px" alt="" />
          <img src="./icons/linkedin.svg" width="27px" alt="" />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
