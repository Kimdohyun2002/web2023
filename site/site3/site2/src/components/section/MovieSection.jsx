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
          <div>
            <img src="../../assets/images/movie/movie.png" alt="언스플이미지1" />
          </div>
          <div>
            <img src="../../assets/images/movie/movie1.png" alt="언스플이미지2" />
          </div>
          <div>
            <img src="../../assets/images/movie/movie2.png" alt="언스플이미지3" />
          </div>
          <div>
            <img src="../../assets/images/movie/movie4.png" alt="언스플이미지4" />
          </div>
          <div>
            <img src="../../assets/images/movie/movie5.png" alt="언스플이미지5" />
          </div>
          <div>
            <img src="../../assets/images/movie/movie6.png" alt="언스플이미지6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieSection;
