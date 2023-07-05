import React from 'react';

import { Link } from 'react-router-dom';

const unsplashText = {
  title: '코딩 언어 추천',
  desc: (
    <p>
      리액트, 자바스크립트 등 많은 언어들이 있습니다. <br /> 함께 알아봅시다!
    </p>
  ),
};

const unsplashItem = [
  {
    img: '../../assets/images/unsplash/unsplash1.png',
    title: '리액트',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/unsplash/unsplash2.png',
    title: '자바스크립트',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/unsplash/unsplash3.png',
    title: 'HTML/CSS',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/unsplash/unsplash4.png',
    title: 'Vite',
    num: 'dkelkt442',
  },
];

function UnsplashImg({ img, title, num }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>{unsplashText.title}</h3>
          <p>{unsplashText.desc}</p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          {unsplashItem.map((text, index) => (
            <UnsplashImg key={index} img={text.img} title={text.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default UnsplashSection;
