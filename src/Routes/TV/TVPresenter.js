import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => show.name)}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => show.name)}
        </Section>
      )}

      {airingToday && airingToday.length > 0 && (
        <Section title="AiringToday Shows">
          {airingToday.map((show) => show.name)}
        </Section>
      )}
      {error && <Message color={"red"} text={error}></Message>}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
