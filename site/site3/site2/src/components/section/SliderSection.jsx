function SliderSection(props) {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__iiner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <div className="slider s1 container">
            <div className="text">
              <h3>
                코딩
                <br />
                길라잡이
              </h3>
              <p>
                컴퓨터와의 대화! 새로운 언어!
                <br />
                코딩은 대체 무엇일까?
              </p>
              <a href="/" className="more button-red">
                더 알아보기
              </a>
            </div>
            <div className="img" aria-label="hidden">
              <img src="../assets/images/slider/slidericon02.png" alt="이미지1" />
              <img src="../assets/images/slider/slidericon03.png" alt="이미지2" />
              <img src="../assets/images/slider/slidericon01.png" alt="이미지3" />
            </div>
            <div className="circle" aria-label="hidden">
              <span className="circle c1"></span>
              <span className="circle c2"></span>
              <span className="circle c3"></span>
              <span className="circle c4"></span>
              <span className="circle c5"></span>
            </div>
          </div>
          {/* <!-- <div className="slider s2">
                        <h3>new<br />portfolio</h3>
                        <p>끝이라고 생각할때 ! 너무 늦었다. <br />그러니 지금 당장 시작하라!</p>
                        <a href="/">더 알아보기</a>
                    </div>
                    <div className="slider s3">
                        <h3>new<br />portfolio</h3>
                        <p>끝이라고 생각할때 ! 너무 늦었다. <br />그러니 지금 당장 시작하라!</p>
                        <a href="/">더 알아보기</a>
                    </div> --> */}
        </div>
        <div className="slider__btn">
          <a href="/" className="left">
            <span className="ir">이전이미지</span>
          </a>
          <a href="/" className="right">
            <span className="ir">다음이미지</span>
          </a>
        </div>
        <div className="slider__dot">
          <a href="/" className="dot active">
            <span className="ir">1번 이미지</span>
          </a>
          <a href="/" className="dot">
            <span className="ir">2번 이미지</span>
          </a>
          <a href="/" className="dot">
            <span className="ir">3번 이미지</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SliderSection;
