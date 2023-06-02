function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>코딩 유튜버 추천</h3>
          <p>
            노마드 코더, 애플 코딩 등 많은 유튜버들이 있습니다. <br />
            함께 공부 합시다!
          </p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            <img src="../../assets/images/youtube/youtube1.png" alt="유튜브" />
          </div>
          <div>
            <img src="../../assets/images/youtube/youtube2.png" alt="유튜브" />
          </div>
          <div>
            <img src="../../assets/images/youtube/youtube3.png" alt="유튜브" />
          </div>
          <div>
            <img src="../../assets/images/youtube/youtube4.png" alt="유튜브" />
          </div>
          <div>
            <img src="../../assets/images/youtube/youtube5.png" alt="유튜브" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;