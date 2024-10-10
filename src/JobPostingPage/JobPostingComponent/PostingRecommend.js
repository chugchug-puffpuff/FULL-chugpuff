import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './PostingRecommend.css'
import axios from 'axios';

const PostingRecommend = () => {
  const [showMore, setShowMore] = useState(false);
  const [postRecommend, setPostRecommend] = useState([]);
<<<<<<< HEAD
  const displayedRecommendations = showMore ? postRecommend.slice(0, 8) : postRecommend.slice(0, 4);
=======
  const [scrapedJobs, setScrapedJobs] = useState([]);
  const displayedRecommendations = showMore ? postRecommend.slice(0, 12) : postRecommend.slice(0, 4);
  const imageCache = {};
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/job-postings/recommendations", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
<<<<<<< HEAD
        const jobRecommendations = response.data.jobs.job.map(job => {
=======
        const jobRecommendations = await Promise.all(response.data.jobs.job.map(async job => {
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
          const expirationTimestamp = job['expiration-timestamp'] * 1000;
          const currentTime = new Date().getTime();
          const timeDifference = expirationTimestamp - currentTime;
          const expirationDay = `D-${Math.ceil(timeDifference / (1000 * 60 * 60 * 24))}`;

<<<<<<< HEAD
=======
          // 스크랩 수 불러오기
          const scrapResponse = await axios.get(`http://localhost:8080/api/job-postings/${job.id}/scrap-count`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });

          // 이미지 URL 가져오기
          const fetchImage = async (title) => {
            if (imageCache[title]) {
              return imageCache[title];
            }
            try {
              const response = await axios.get(`https://api.bing.microsoft.com/v7.0/images/search?q=${title} 로고`, {
                headers: { 'Ocp-Apim-Subscription-Key': '1e1ba0956772408883e8692f800bb01e' }
              });
              if (response.data.value && response.data.value.length > 0) {
                const imageUrl = response.data.value[0].contentUrl;
                imageCache[title] = imageUrl;
                return imageUrl;
              }
            } catch (error) {
              console.error('Error fetching image from Bing API', error);
            }
            return 'https://cdn.animaapp.com/projects/666f9293d0304f0ceff1aa2f/releases/66c2d8cf4d8f7eb28bb7ce11/img/image-2.png';
          };

          const imageUrl = await fetchImage(job.position.title);

>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
          return {
            jobId: job.id,
            company: job.company.detail.name,
            title: job.position.title,
            expirationDay: expirationDay,
<<<<<<< HEAD
          };
        });
=======
            scrapCount: scrapResponse.data || 0,
            imageUrl: imageUrl
          };
        }));
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
        setPostRecommend(jobRecommendations);
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };

    fetchData();
  }, []);

<<<<<<< HEAD
=======
  // 스크랩한 공고 목록 가져온 다음 리스트에 스크랩한 공고 표시
  useEffect(() => {
    axios.get('http://localhost:8080/api/job-postings/scraps', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      try {
        const parsedData = response.data.map(item => JSON.parse(item)); // 개별 파싱
        const allJobs = parsedData.flatMap(data => data.jobs.job); // job 배열 병합
        const filteredJobs = allJobs.filter(job => job.id); // id가 있는 job 필터링
        setScrapedJobs(filteredJobs.map(job => job.id));
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    });
  }, []);

>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
  return (
    <div>
      <div className="PostingRecommend-frame">
        <p className="PostingRecommend-text-wrapper">🌟 나에게 맞는 공고 추천</p>
        <div className="PostingRecommend-div" onClick={() => setShowMore(!showMore)}>
          {showMore ? '닫기' : '더보기'}
        </div>
      </div>
      <div className="PostingRecommend-frame-7">
        {displayedRecommendations.map((job, index) => (
          <div className="PostingRecommend-group" key={index}>
            <Link to={`/recruitinfo/${job.jobId}`}>
              <div className="PostingRecommend-overlap-group">
                <img
                  className="PostingRecommend-image"
<<<<<<< HEAD
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/666f9293d0304f0ceff1aa2f/releases/66ba069ad632e20f0c1152a0/img/image-2-1@2x.png"
=======
                  alt="기업 이미지 로고"
                  src={job.imageUrl}
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
                />
                <div className="PostingRecommend-frame-8">
                  <div className="PostingRecommend-text-wrapper-5">{job.company}</div>
                  <div className="PostingRecommend-frame-9">
                    <div className="PostingRecommend-frame-10">
                      <p className="PostingRecommend-text-wrapper-6">{job.title}</p>
                    </div>
                    <div className="PostingRecommend-frame-11">
                      <div className="PostingRecommend-frame-12">
                        <div className="PostingRecommend-grade-wrapper">
                          <img
<<<<<<< HEAD
                            className="PostingRecommend-grade"
                            alt="Grade"
                            src="https://cdn.animaapp.com/projects/666f9293d0304f0ceff1aa2f/releases/66ba069ad632e20f0c1152a0/img/grade-11@2x.png"
                          />
                        </div>
                        <div className="PostingRecommend-frame-13">
                          <div className="PostingRecommend-text-wrapper-7">30</div>
=======
                            className={`PostingRecommend-grade ${scrapedJobs.includes(job.jobId) ? 'scraped' : ''}`}
                            alt="scrap"
                            src="https://cdn.animaapp.com/projects/666f9293d0304f0ceff1aa2f/releases/66ba069ad632e20f0c1152a0/img/grade@2x.png"
                          />
                        </div>
                        <div className="PostingRecommend-frame-13">
                          <div className="PostingRecommend-text-wrapper-7">{job.scrapCount}</div>
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
                        </div>
                      </div>
                      <div className="PostingRecommend-text-wrapper-8">{job.expirationDay}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostingRecommend