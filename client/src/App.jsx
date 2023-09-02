import React from "react";
//import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { ErrorPage } from "./pages/ErrorPage";
import { Helmet } from "react-helmet";
import BaconIcon from "../src/assets/img/baconicon.png";

function App() {
  return (
    <>
      <Helmet>
        <title>Tanner Bacon Portfolio</title>
      </Helmet>
      <Helmet>
        <link rel="icon" href={BaconIcon} />
      </Helmet>{" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Main />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
