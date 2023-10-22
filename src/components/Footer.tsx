import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ display: "block", marginTop: "2rem", width: "100%" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between", paddingTop: "2rem", paddingBottom: "2rem", borderTop: "1px solid #E5E7EB" }}>
        <Typography variant="h6" color="secondary">
          Copyright © 2023 OneCenter.ai
        </Typography>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "2rem" }}>
          <Link to="https://twitter.com/helloonecenter" target="_blank" rel="noopener noreferrer">
            <img src="./icons/twitter.png" width="20px" alt="" />
          </Link>
          <Link to="https://www.linkedin.com/company/helloonecenter" target="_blank" rel="noopener noreferrer">
            <img src="./icons/linkedin.png" width="20px" alt="" />
          </Link>
          <Link to="https://www.instagram.com/helloonecenter" target="_blank" rel="noopener noreferrer">
            <img src="./icons/instagram.png" width="20px" alt="" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
