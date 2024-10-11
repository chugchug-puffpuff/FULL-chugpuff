import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AIInterviewStart.css";
import InterviewHistoryBar from "./AIComponent/InterviewHistoryBar.js";
import ImmHistory from "./AIComponent/ImmHistory.js";
import TotHistory from "./AIComponent/TotHistory.js";
import NavBar from "../MainPage/MainComponent/NavBar.js";
import axios from 'axios';

const AIInterviewHistory = ({ authenticate, setAuthenticate, userName }) => {
  const location = useLocation();
  const { interviewId } = location.state || {};
  const [feedbackType, setFeedbackType] = useState(null);

  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/ainterview/${interviewId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setFeedbackType(response.data.feedbackType);
      } catch (error) {
        console.error('Failed to fetch interview data', error);
      }
    };

    fetchInterviewData();
  }, [interviewId]);

  const handleFeedbackTypeChange = (type) => {
    setFeedbackType(type);
  };

  return (
    <div className="AIInterviewStart">
      {feedbackType === "전체 피드백" ? (
        <TotHistory interviewId={interviewId} userName={userName} />
      ) : (
        <ImmHistory interviewId={interviewId} userName={userName} />
      )}
      <InterviewHistoryBar onFeedbackTypeChange={handleFeedbackTypeChange} />
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />
    </div>
  );
};

export default AIInterviewHistory;