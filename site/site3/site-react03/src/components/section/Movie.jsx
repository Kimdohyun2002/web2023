import React from 'react';

import { Link } from 'react-router-dom';

const movieItem = [
  {
    img: '../../assets/images/movie/movie.png',
    title: '언스플이미지1',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/movie/movie1.png',
    title: '언스플이미지2',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/movie/movie2.png',
    title: '언스플이미지3',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/movie/movie4.png',
    title: '언스플이미지4',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/movie/movie5.png',
    title: '언스플이미지5',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/movie/movie5.png',
    title: '언스플이미지6',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/movie/movie6.png',
    title: '언스플이미지6',
    num: 'dkelkt442',
  },
];

function MovieImg({ img, title, num }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

function MovieSection(props) {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner container">
        <div className="movie__text">
          <h3>도서 소개</h3>
          <p>다양한 코딩 도서를 추천 하고 있습니다!</p>
          <a href="/" className="button-blue">
            자세히보기
          </a>
        </div>
        <div className="movie__item">
          {movieItem.map((text, index) => (
            <MovieImg key={index} img={text.img} title={text.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieSection;
