function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>컴퓨터 언어</h3>
          <p>
            리액트, 자바스크립트 등 많은 언어들이 있습니다. <br />
            함께 알아봅시다!
          </p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <img src="../../assets/images/unsplash/unsplash1.png" alt="유튜브" />
          </div>
          <div>
            <img src="../../assets/images/unsplash/unsplash2.png" alt="유튜브" />
          </div>
          <div>
            <img src="../../assets/images/unsplash/unsplash3.png" alt="유튜브" />
          </div>
          <div>
            <img src="../../assets/images/unsplash/unsplash4.png" alt="유튜브" />
          </div>
          <div>
            <img src="../../assets/images/unsplash/unsplash5.png" alt="유튜브" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default UnsplashSection;