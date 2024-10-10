import React from 'react';
import './PopularPostMain.css';
<<<<<<< HEAD

const PopularPostMain = ({ category, comments, favorites, date, title }) => {
    const getCategoryClass = () => {
    if (category === '정보 공유') return 'infoShare';
    if (category === '취업 고민') return 'jobDiscussion';
    return '';
=======
import { Link, useNavigate } from 'react-router-dom';

// 날짜 형식을 0000-00-00 00:00:00으로 변환
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const datePart = date.toISOString().split('T')[0];
  const timePart = date.toTimeString().split(' ')[0];

  return `${datePart} ${timePart}`;
};

const PopularPostMain = ({ authenticate, boardNo, category, boardTitle, boardDate, commentCount, likes, liked }) => {
  const navigate = useNavigate();
  
  // 로그인하지 않은 상태에서 타이틀 클릭 시 로그인페이지로 이동
  const handleLinkClick = (e) => {
    if (!authenticate) {
      e.preventDefault();
      navigate("/login");
    }
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
  };

  return (
    <div className="PopularPostMain-frame">
      <div className="PopularPostMain-frame-2">
<<<<<<< HEAD
        <div className={`PopularPostMain-div-wrapper ${getCategoryClass()}`}>
=======
        <div className={`PopularPostMain-div-wrapper ${category === "정보공유" ? "infoShare" : "jobDiscussion"}`}>
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
          <div className="PopularPostMain-text-wrapper">{category}</div>
        </div>
        <div className="PopularPostMain-frame-3">
          <div className="PopularPostMain-frame-4">
            <div className="PopularPostMain-frame-5">
              <img
                className="PopularPostMain-img"
                alt="댓글 아이콘"
                src="https://cdn.animaapp.com/projects/666f9293d0304f0ceff1aa2f/releases/666f93a3d0304f0ceff1aa35/img/sms@2x.png"
              />
<<<<<<< HEAD
              <div className="PopularPostMain-text-wrapper-2">{comments}</div>
            </div>
            <div className="PopularPostMain-frame-5">
              <img
                className="PopularPostMain-img"
                alt="좋아요 아이콘"
                src="https://cdn.animaapp.com/projects/666f9293d0304f0ceff1aa2f/releases/666f93a3d0304f0ceff1aa35/img/favorite@2x.png"
              />
              <div className="PopularPostMain-text-wrapper-2">{favorites}</div>
            </div>
          </div>
          <div className="PopularPostMain-text-wrapper-3">{date}</div>
        </div>
      </div>
      <p className="PopularPostMain-text-wrapper-4">{title}</p>
=======
              <div className="PopularPostMain-text-wrapper-2">{commentCount}</div>
            </div>
            <div className="PopularPostMain-frame-5">
              <img
                className={`PopularPostMain-img ${liked ? 'liked' : ''}`}
                alt="좋아요 아이콘"
                src="https://cdn.animaapp.com/projects/666f9293d0304f0ceff1aa2f/releases/666f93a3d0304f0ceff1aa35/img/favorite@2x.png"
              />
              <div className="PopularPostMain-text-wrapper-2">{likes}</div>
            </div>
          </div>
          <div className="PopularPostMain-text-wrapper-3">{formatDate(boardDate)}</div>
        </div>
      </div>
      <Link to={`/communitypost/${boardNo}`} onClick={handleLinkClick}>
        <p className="PopularPostMain-text-wrapper-4">{boardTitle}</p>
      </Link>
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
    </div>
  );
};

export default PopularPostMain;