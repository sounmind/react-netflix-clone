import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
  display: flex;
`;

const Item = styled.div``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7px;
  line-height: 1.5;
  width: 80%;
  margin-bottom: 10px;
`;

const List = styled("ul")`
  display: flex;
  flex-direction: column;
`;

const Tab = styled("div")`
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const TabContent = styled("div")`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 600;
`;

const Video = styled("iframe")`
  margin-top: 10px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  width: 200px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
  margin-bottom: 5px;
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, loading, error, isMovie }) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading | NetflixClone</title>
        </Helmet>
        <Loader></Loader>
      </>
    ) : (
      <>
        {console.log(result)}
        <Container>
          <Helmet>
            <title>
              {result.original_title || result.original_name} | NetflixClone
            </title>
          </Helmet>
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          ></Backdrop>
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                  : require("../../assets/noPoster.jpg")
              }
            ></Cover>
            <Data>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.split("-")[0]
                    : result.first_air_date.split("-")[0]}
                </Item>
                <Divider>|</Divider>
                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                  min
                </Item>
                <Divider>|</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
                {isMovie ? (
                  <>
                    <Divider>|</Divider>
                    <Item>
                      <a href={`https://www.imdb.com/title/${result.imdb_id}/`}>
                        IMDB LINK
                      </a>
                    </Item>
                  </>
                ) : (
                  ""
                )}
              </ItemContainer>
              <Overview>{result.overview}</Overview>
              <List>
                <Tab>VIDEOS</Tab>
                {result.videos ? (
                  result.videos.results.map((videoInfo) => (
                    <Video
                      height="150"
                      width="300"
                      src={`https://www.youtube.com/embed/${videoInfo.key}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></Video>
                  ))
                ) : (
                  <TabContent>"NO VIDEOS..."</TabContent>
                )}
                <Tab>PRODUCTION</Tab>
                <Tab>
                  <TabContent>
                    COUNTRY:
                    {result.production_countries.map((country) => country.name)}
                  </TabContent>
                  <TabContent>
                    COMPANY:
                    {result.production_companies.map((company, index) => {
                      if (index === result.production_companies.length - 1) {
                        return ` ${company.name}`;
                      } else {
                        return ` ${company.name} | `;
                      }
                    })}
                  </TabContent>
                </Tab>
                {isMovie ? (
                  ""
                ) : (
                  <Tab>
                    Seasons
                    {result.seasons ? (
                      result.seasons.map((seasonInfo) => (
                        <>
                          <TabContent>
                            {seasonInfo.name} | Total Ep:
                            {seasonInfo.episode_count}
                          </TabContent>
                          <Image
                            bgUrl={
                              seasonInfo.poster_path
                                ? `https://image.tmdb.org/t/p/w300${seasonInfo.poster_path}`
                                : require("../../assets/noPoster.jpg").default
                            }
                          ></Image>
                          <Overview>
                            {seasonInfo.overview.slice(0, 200) + " ... "}
                          </Overview>
                        </>
                      ))
                    ) : (
                      <TabContent>"NO SEASONS ..."</TabContent>
                    )}
                    <TabContent></TabContent>
                  </Tab>
                )}
              </List>
            </Data>
          </Content>
        </Container>
      </>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
