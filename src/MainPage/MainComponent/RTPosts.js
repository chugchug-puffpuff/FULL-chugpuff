import React, { useEffect, useState } from 'react';
import './RTPosts.css';
import PopularPost from './RTPComponents/PopularPost';
import postData from '../../TestData/postData.json';

const RTPosts = () => {
  const [sortedPostData, setSortedPostData] = useState([]);

  useEffect(() => {
    const sortedData = postData.sort((a, b) => b.favorites - a.favorites).slice(0, 7);
    setSortedPostData(sortedData);
  }, []);

  return (
    <div>
      <div className="RTPosts-frame">
        <div className="RTPosts-text-wrapper">실시간 인기글</div>
        <div className="RTPosts-div">더보기</div>
      </div>
      <div className="RTPosts-frame-2">
        {sortedPostData.map((post, index) => (
          <PopularPost
            key={index}
            category={post.category}
            date={post.date}
            title={post.title}
            comments={post.comments}
            favorites={post.favorites}
          />
        ))}
      </div>
    </div>
  )
}

export default RTPosts;