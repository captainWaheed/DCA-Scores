import React from "react";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
import Secondary from "./components/Secondary";
import Scorecard from "./components/Scorecard";

const App = () => (
  <>
    <Navbar />
    <Main />
    <Leaderboard />
    <Players />
    <Secondary />
    <Scorecard />
    <Footer />
  </>
);

export default App;
