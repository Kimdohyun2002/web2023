function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>포트폴리오 구경하기</h3>
      <p>웹개발자들의 다양한 포트폴리오 입니다.</p>
      <div className="port__inner">
        <div className="port__btn">
          <div className="port__btn1">21기</div>
          <div className="port__btn1">22기</div>
          <div className="port__btn1">23기</div>
          <div className="port__btn1 ">24기</div>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <img src="../../assets/images/port/port_img1.png" alt="멤버" />
            </figure>
            <div className="port__body">
              <span>
                <img src="../assets/images/Member/peep-1.svg" alt="멤버" />
              </span>
              <div>
                <h4>김도현 포트폴리오</h4>
                <p>프론트앤드 개발자 포트폴리오</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="../../assets/images/port/port_img2.png" alt="멤버" />
            </figure>
            <div className="port__body">
              <span>
                <img src="../../assets/images/Member/peep-12.svg" alt="멤버" />
              </span>
              <div>
                <h4>김도현 포트폴리오</h4>
                <p>프론트앤드 개발자 포트폴리오</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="../../assets/images/port/port_img3.png" alt="멤버" />
            </figure>
            <div className="port__body">
              <span>
                <img src="../../assets/images/Member/peep-13.svg" alt="멤버" />
              </span>
              <div>
                <h4>김도현 포트폴리오</h4>
                <p>프론트앤드 개발자 포트폴리오</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="../../assets/images/port/port_img4.png" alt="멤버" />
            </figure>
            <div className="port__body">
              <span>
                <img src="../../assets/images/Member/peep-14.svg" alt="멤버" />
              </span>
              <div>
                <h4>김도현 포트폴리오</h4>
                <p>프론트앤드 개발자 포트폴리오</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="../../assets/images/port/port_img5.png" alt="멤버" />
            </figure>
            <div className="port__body">
              <span>
                <img src="../../assets/images/Member/peep-15.svg" alt="멤버" />
              </span>
              <div>
                <h4>김도현 포트폴리오</h4>
                <p>프론트앤드 개발자 포트폴리오</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="../../assets/images/port/port_img6.png" alt="멤버" />
            </figure>
            <div className="port__body">
              <span>
                <img src="../../assets/images/Member/peep-16.svg" alt="멤버" />
              </span>
              <div>
                <h4>김도현 포트폴리오</h4>
                <p>프론트앤드 개발자 포트폴리오</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PortSection;
