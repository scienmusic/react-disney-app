import React from 'react'
import styled from 'styled-components';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Row from '../../components/Row';
import requests from '../../api/requests';

const MainPage = () => {
  return (
    <Container>
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" id="TP" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" id="RM" fetchUrl={requests.fetchRomanceMovies}/>      
    </Container>      
  )
}

export default MainPage;

const Container = styled.main`
  postion : realatives;
  min-height : calc(100vh - 250px);
  overflow-x : hidden;
  display : block;
  top : 72px;
  paddidng : 0 calc(3.5vw + 5px)

  &:after {
    background : url("/images/home-background.png") center center / cover no-repeat fixed;
    content : "";
    position: absolute;
    inset : 0px;
    opacity : 1;
    z-index : -1;
  }
`;
