import React from "react";
import "./MainPage.css";
import NavBar from "./MainComponent/NavBar";
import MainBanner from "./MainComponent/MainBanner";
import RTPosts from "./MainComponent/RTPosts";
import RTAnnouncements from "./MainComponent/RTAnnouncements";
import Footer from "./MainComponent/Footer";

const MainPage = ({ authenticate, setAuthenticate, userName }) => {
  return (
    <div className="MainPage">
      <MainBanner />
<<<<<<< HEAD
      <RTPosts />
      <RTAnnouncements />
=======
      <RTPosts authenticate={authenticate} />
      <RTAnnouncements authenticate={authenticate} />
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
      <Footer />
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />
    </div>
  );
};

export default MainPage;