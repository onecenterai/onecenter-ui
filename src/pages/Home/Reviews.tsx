import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { Box, Container, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { AppDispatch } from "../../store";
import { getUsersReview } from "../../slices/GetReviewsSlice";

function Reviews() {
  const dispatch = useDispatch<AppDispatch>();
  const reviews = useSelector((state: any) => state.Reviews.reviews);
  console.log(reviews);

  useEffect(() => {
    dispatch(getUsersReview());
  }, []);
  return (
    <div id="reviews">
      <Container>
        <Box sx={{ padding: "10rem 0rem 2rem 0rem" }}>
          <Typography variant="h2" sx={{ fontSize: "3.5rem", textAlign: "center" }}>
            What are people saying?{" "}
          </Typography>
          <Typography variant="body1" color="secondary" sx={{ textAlign: "center", padding: "2rem 0rem" }}>
            Here what people think about your company and other companies realtime right here on our website.
          </Typography>
        </Box>

        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }} sx={{ backgroundColor: "transparent", padding: 0, margin: 0 }}>
          {reviews?.map((each: any) => {
            return <Card name={each.name} company={each.company} review={each.content} />;
          })}
        </Masonry>
      </Container>
    </div>
  );
}

export default Reviews;
