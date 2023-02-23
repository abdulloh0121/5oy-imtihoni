import React, { useEffect } from "react";
import "./css/App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Row from "./components/Row";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import {
  useGetDiscoverQuery,
  useGetComedyQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvShowQuery,
  useGetDocumentariesQuery,
  useGetHorrorQuery,
  useGetRomanceQuery,
} from "./features/Api";

function App() {
  useEffect(() => {
    document.title = "Netflix";
  }, []);
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Banner fetch={useGetTrendingQuery()} />
                  <Row title="Action Movies" fetch={useGetTrendingQuery()} />
                  <Row
                    title="Netflix Originals"
                    fetch={useGetDocumentariesQuery()}
                  />
                  <Row title="Trending" fetch={useGetTopRatedQuery()} />
                  <Row title="Top Rated" fetch={useGetDiscoverQuery()} />
                  <Row title="Comedy Movies" fetch={useGetComedyQuery()} />
                  <Row title="Horror Movies" fetch={useGetHorrorQuery()} />
                  <Row title="Romance Movies" fetch={useGetRomanceQuery()} />
                  <Row title="TV SHOW" fetch={useGetTvShowQuery()} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/details/:type/:id"
              exact
              element={
                <>
                  {" "}
                  <Home />{" "}
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
