import React from 'react';

import { Link } from 'react-router-dom';

const youtubeText = {
  title: '코딩 유튜버 추천',
  desc: (
    <p>
      노마드 코더, 애플 코딩 등 많은 유튜버들이 있습니다. <br /> 함께 공부
      합시다!
    </p>
  ),
};
const youtubeItem = [
  {
    img: '../../assets/images/youtube/youtube1.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/youtube/youtube2.png',
    title: '좋코딩',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/youtube/youtube3.png',
    title: '조코딩',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/youtube/youtube4.png',
    title: '생활 코딩',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/youtube/youtube5.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
];

function YoutubeImg({ img, title, num }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>{youtubeText.title}</h3>
          <>{youtubeText.desc}</>
          <Link to="/" className="button-red">
            자세히 보기
          </Link>
        </div>
        <div className="youtube__item">
          {youtubeItem.map((text, index) => (
            <YoutubeImg key={index} img={text.img} title={text.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
