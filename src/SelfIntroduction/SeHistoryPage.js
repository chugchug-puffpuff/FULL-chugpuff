import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SeHistoryPage.css";
import HistoryComponent from "./SelfIntroductionComponent/HistoryComponent.js";
import SeHistoryBar from "./SelfIntroductionComponent/SeHistoryBar.js";
import NavBar from "../MainPage/MainComponent/NavBar.js";

const SeHistoryPage = ({ authenticate, setAuthenticate, userName }) => {
  const location = useLocation();
  const { es_no } = location.state || { es_no: null };
  const [reload, setReload] = useState(false);

  const reloadHistory = () => {
    setReload(!reload);
  };

  return (
    <div className="SeHistoryPage">
      <HistoryComponent es_no={es_no} reloadHistory={reloadHistory} />
      <SeHistoryBar />
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />
    </div>
  );
};

export default SeHistoryPage;