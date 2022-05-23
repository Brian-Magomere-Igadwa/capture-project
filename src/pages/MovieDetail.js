import React, { useEffect, useState } from "react";
import styled from "styled-components";
//in V6 we stopped using useHistory so we use useNavigate instead
import { useLocation } from "react-router-dom";
import { MovieState } from "../moviestate";

const MovieDetail = () => {
  const pathInfo = useLocation();

  const url = pathInfo.pathname;
  const [Movies, setMovies] = useState(MovieState);
  const [Movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = Movies.filter((stateMovie) => stateMovie.url === url);
    // console.log(currentMovie[0]);
    setMovie(currentMovie[0]);
  }, [Movies, url]);

  return (
    <>
      {Movie && (
        <StyledDetails>
          <StyledHeadLine>
            <h2>{Movie.title}</h2>
            <img src={Movie.mainImg} alt="movie" />
          </StyledHeadLine>
          <StyledAwards>
            {Movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              ></Award>
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={Movie.secondaryImg} alt="movie" />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled.div`
  color: white;
`;
const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20rem;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const StyledAward = styled.div`
  padding: 5rem 0rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
export default MovieDetail;
