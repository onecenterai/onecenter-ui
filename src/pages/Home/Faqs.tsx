import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import faqs from "../../data/faqs.json";

const useStyles = makeStyles(() => {
  return {
    faqs: {
      height: "auto",
      background: "url(./images/background-faqs.png)",
      margin: "5rem 0rem 0rem 0rem",
      padding: "10rem 0rem",
    },
  };
});
function Faqs() {
  const classes = useStyles();
  return (
    <div className={classes.faqs}>
      <Container>
        <Typography variant="h3" sx={{ fontSize: "3.5rem", fontWeight: 400 }}>
          Frequently asked questions
        </Typography>
        <Typography variant="body1" color="secondary" sx={{ fontWeight: 300, padding: "2rem 0rem" }}>
          If you can’t find what you’re looking for, email our support team and if you’re lucky <br /> someone will get back to you.{" "}
        </Typography>
        <Grid container spacing={5}>
          {faqs.map((faq) => {
            return (
              <Grid item md={4}>
                <Typography variant="h5">{faq.question}</Typography>
                <Typography variant="body1" color="secondary" sx={{ fontWeight: 300, padding: "2rem 0rem" }}>
                  {faq.answer}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Faqs;
