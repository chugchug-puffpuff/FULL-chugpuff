import React, { useState, useEffect, useCallback } from 'react';
import './EditingComponent.css';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// 로딩 중 텍스트입니다.
const TypingText = () => {
  const text = "답변 내용을 분석 중입니다...";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % text.length;
        if (newIndex === 0) {
          setDisplayedText('');
        }
        return newIndex;
      });
    }, 300);

    return () => clearInterval(intervalId);
  }, [index, text]);

  return <div>{displayedText}</div>;
};

const EditingComponent = ({ details, es_feedback }) => {
  const [feedback, setFeedback] = useState(es_feedback || '');
  const [loading, setLoading] = useState(false); // 로딩 상태

  const formattedText = feedback
    .replace(/\n\n/g, '\n\n&nbsp;\n\n')
    .replace(/(\n#? )(.+?:)/g, '$1<span class="bold">$2</span>')
    .replace(/피드백:/g, '피드백')
    .replace(/자기소개서:/g, '자기소개서');

  return (
    <div className="EditingComponent-frame-12">
      <div className="EditingComponent-frame-wrapper">
        <div className="EditingComponent-frame-13">
          <div className="EditingComponent-frame-14">
            {details && details.map((detail, index) => (
              <div key={index} className="EditingComponent-frame-15">
                <div className="EditingComponent-text-wrapper-7">자기소개서 문항 {index + 1}</div>
                <p className="EditingComponent-text-wrapper-8">{detail.eS_question}</p>
                <div className="EditingComponent-text-wrapper-7">답변 {index + 1}</div>
                <p className="EditingComponent-text-wrapper-8">{detail.eS_answer}</p>
              </div>
            ))}
            <img
              className="EditingComponent-img"
              alt="Line"
              src="https://cdn.animaapp.com/projects/666f9293d0304f0ceff1aa2f/releases/6698aa612be89236643e00e3/img/line-2.png"
            />
            <div className="EditingComponent-frame-15">
              <div className="EditingComponent-text-wrapper-7">피드백</div>
              {loading ? <TypingText /> : (
                <div className="EditingComponent-text-wrapper-8">
                  <ReactMarkdown 
                    className="EditingComponent-text-wrapper-8" 
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeRaw]}
                  >
                    {formattedText}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditingComponent;