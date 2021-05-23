import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TVs | NetflixClone</title>
    </Helmet>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        <Helmet>
          <title>TVs | NetflixClone</title>
        </Helmet>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map((show) => (
              <Poster
                title={show.original_name}
                imageUrl={show.poster_path}
                isshow={true}
                rating={show.vote_average}
                year={show.first_air_date?.split("-")[0]}
                id={show.id}
                key={show.id}
              ></Poster>
            ))}
          </Section>
        )}

        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((show) => (
              <Poster
                title={show.original_name}
                imageUrl={show.poster_path}
                isshow={true}
                rating={show.vote_average}
                year={show.first_air_date?.split("-")[0]}
                id={show.id}
                key={show.id}
              ></Poster>
            ))}
          </Section>
        )}

        {airingToday && airingToday.length > 0 && (
          <Section title="AiringToday Shows">
            {airingToday.map((show) => (
              <Poster
                title={show.original_name}
                imageUrl={show.poster_path}
                isshow={true}
                rating={show.vote_average}
                year={show.first_air_date?.split("-")[0]}
                id={show.id}
                key={show.id}
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Message color={"red"} text={error}></Message>}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
