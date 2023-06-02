function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>멤버 소개</h3>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
      <div className="member__inner container">
        <article className="member">
          <figure className="member__header">
            <img src="../../assets/images/Member/peep-1.svg" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>웹쓰 25기</h4>
            <p className="desc">포폴 보기</p>
          </div>
        </article>
        <article className="member">
          <figure className="member__header">
            <img src="../assets/images/Member/peep-2.svg" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>웹쓰 24기</h4>
            <p className="desc">포폴 보기</p>
          </div>
        </article>
        <article className="member">
          <figure className="member__header">
            <img src="../../assets/images/Member/peep-3.svg" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>웹쓰 25기</h4>
            <p className="desc">포폴 보기</p>
          </div>
        </article>
      </div>
    </section>
  );
}
export default MemberSection;
