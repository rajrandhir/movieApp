import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../context/context";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const resData = await res.json();
      if (resData.Response === "True") {
        setIsLoading(false);
        setMovie(resData);
        setIsError({
          show: false,
          msg: resData.error,
        });
      } else {
        setIsError({
          show: true,
          msg: resData.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeStamp = setTimeout(() => {
      getMovie(`${API_URL}&i=${id}`);
    }, 500);
    return () => {
      clearTimeout(timeStamp);
    };
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading_mob">
        <h4>loading...</h4>
    </div>
    )
  }

  return (
    <>
      <section>
        <div className="movie_section">
          <div className="card_section" style={{ display: "flex" }}>
            <Grid container>
              <Grid item xs={12} sm={6} md={5}>
                <div className="image_section">
                  <img src={movie.Poster} height="300px" alt="poster" />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <div className="movie_details">
                  <Typography variant="h5" style={{ marginBottom: "1rem" }}>
                    {movie.Title}
                  </Typography>
                  <Typography variant="h6" style={{ fontSize: "16px" }}>
                    Released: {movie.Released}
                  </Typography>
                  <Typography variant="h6" style={{ fontSize: "16px" }}>
                    Genre: {movie.Genre}
                  </Typography>
                  <Typography variant="h6" style={{ fontSize: "16px" }}>
                    Rating: {movie.imdbRating}
                  </Typography>
                  <Typography variant="h6" style={{ fontSize: "16px" }}>
                    Country: {movie.Country}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "2rem",
                    }}
                  >
                    <Button variant="contained" onClick={() => navigate("/")}>
                      Home
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
