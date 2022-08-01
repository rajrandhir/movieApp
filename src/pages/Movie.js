import React from "react";
import { useGlobalContext } from "../context/context";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { NavLink, Link } from "react-router-dom";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="main_box">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
      <section>
        <Container>
          <Grid container spacing={3}>
            {movie.map((item) => {
              const { imdbID, Title, Poster } = item;
              const movieName = item.Title.substring(0, 10);

              return (
                <Grid item xs={12} sm={4} md={2}>
                  <div className="card_main">
                    <Link
                      to={`movie/${imdbID}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card>
                        <Typography
                          variant="h6"
                          sx={{
                            textAlign: "center",
                            fontSize: "19px",
                            margin: "7px",
                            fontFamily: "monospace",
                            objectFit: "contain",
                          }}
                          component="div"
                        >
                          {Title.length >= 10 ? `${movieName}...` : movieName}
                        </Typography>
                        <CardMedia
                          component="img"
                          image={Poster}
                          height="200"
                          width="250"
                        />
                        <CardContent>
                          <Typography></Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Movie;
