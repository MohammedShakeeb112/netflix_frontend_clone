import React from "react";

import Row from "./Row";
import requests from "./requests";
import Banner from './Banner';


import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Hey Prog! Let's build netflix-clone</h1> */}
      {/* NavBar */}
      {/* Banner */}
      
      <Banner single="The Witcher"/>
      
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    
      

    </div>
  );
}

export default App;