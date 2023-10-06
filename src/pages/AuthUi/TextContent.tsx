import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "./Card";

function TextContent() {
  return (
    <Container className="space-btw" sx={{ height: "100%", flexDirection: "column" }}>
      {" "}
      <Typography color="white" variant="h3">
        <Link to="/">OneCenter</Link>
      </Typography>
      <Box>
        <Typography color="white" variant="h2">
          Start Your Journey With Us.
        </Typography>
        <Typography color="white" variant="body1" sx={{ opacity: 1, fontWeight: "200" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illo eligendi reprehenderit eos accusamus deleniti magnam hic dignissimos neque! Laboriosam voluptatem nam, autem cupiditate
          dignissimos similique modi hic aliquid qui.
        </Typography>
      </Box>
      <Card />
    </Container>
  );
}

export default TextContent;
