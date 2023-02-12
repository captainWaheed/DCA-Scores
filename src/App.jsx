import React from "react";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Secondary from "./components/Secondary";

const App = () => (
  <>
    <Navbar />
    <Main />
    <Leaderboard />
    <Secondary />
    <Footer />
  </>
);

export default App;
