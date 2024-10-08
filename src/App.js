import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import MainPage from './MainPage/MainPage.js';
import LoginPage from './LoginPage/LoginPage.js';
import SignUpPage from './SignUpPage/SignUpPage.js';
import MyPage from './MyPage/MyPage.js';
import PrivateRoute from './Route/PrivateRoute';
import ScrollToTop from './Route/ScrollToTop.js';
import AIInterviewPage from './AIInterviewPage/AIInterviewPage.js';
import AIInterviewExecution from './AIInterviewPage/AIInterviewStart.js';
import AIInterviewHistory from './AIInterviewPage/AIInterviewHistory.js';
import SelfIntroductionPage from './SelfIntroduction/SelfIntroductionPage.js';
import SeHistoryPage from './SelfIntroduction/SeHistoryPage.js';
import EditingPage from './SelfIntroduction/EditingPage.js';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('id');
    const storedUserName = localStorage.getItem('name');
    if (token && storedUserId && storedUserName) {
      setAuthenticate(true);
      setUserName(storedUserName);
    }
    console.log("로그인 여부", authenticate);
  }, [authenticate]);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />} />
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate} authenticate={authenticate} setUserName={setUserName} userName={userName}/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/aiinterview" element={<PrivateRoute authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName}>
          <AIInterviewPage authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />
        </PrivateRoute>} />
        <Route path="/aiinterview/start" element={<AIInterviewExecution authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />} />
        <Route path="/aiinterviewhistory/:interviewId" element={<AIInterviewHistory authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />} />
        <Route path="/selfintroduction" element={<PrivateRoute authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName}>
          <SelfIntroductionPage authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />
        </PrivateRoute>} />
        <Route path="/editing-page" element={<EditingPage authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />} />
        <Route path="/selfintroductionhistory/:es_no" element={<SeHistoryPage authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />} />
        <Route path="/myactivities" element={<MyPage authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />} />
        {authenticate && <Route path="/:userId" element={<MainPage authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} />} />}
      </Routes>
    </div>
  );
}

export default App;