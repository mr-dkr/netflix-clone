import './App.css';
import React, {lazy, Suspense} from 'react'
// import Banner from './Banner';
// import Nav from './Nav';
import requests from './request';
// import Row from './Row';
const Row = lazy(()=> import('./Row'));
const Banner = lazy(()=> import('./Banner'));
const Nav = lazy(()=> import('./Nav'))





function App() {
  return (
    <Suspense fallback ={<div>Loading...</div>}>

    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Action" fetchUrl = {requests.fetchActionMovies}/>  
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>




    </div>
    </Suspense>
  );
}

export default App;
