import { Box, Container, Divider, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    card: {
      padding: "2rem",
      height: "auto",
      width: "100%",
      backgroundColor: theme.palette.error.main,
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 10px 29px 0px !important",
      scale: 1,
      transition: "all ease-in-out .2s !important",
      "&:hover": {
        scale: 1.015,
        transition: "all ease-in-out .7s",
      },
    },
  };
});
interface CardProps {
  review: string | null;
  name: string | null;
  company: string | null;
}
function Card({ review, name, company }: CardProps) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.card} elevation={0}>
        <Container>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 400 }} color="secondary">
              {review}
            </Typography>
            <Divider sx={{ margin: "1.5rem 0rem" }} />
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2" sx={{ fontWeight: 100 }}>
              {company}
            </Typography>
          </Box>
        </Container>
      </Paper>
    </div>
  );
}

export default Card;
