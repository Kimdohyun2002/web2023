import React from 'react';

const memberTitle = {
  title: '멤버 소개',
  desc: '웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.',
};
const memberText = [
  {
    img: '../../assets/images/Member/peep-1.svg',
    title: '웹쓰 25기',
    link: '포폴 보기',
  },
  {
    img: '../../assets/images/Member/peep-2.svg',
    title: '웹쓰 27기',
    link: '포폴 보기',
  },
  {
    img: '../../assets/images/Member/peep-3.svg',
    title: '웹쓰 30기',
    link: '포폴 보기',
  },
];
function MemberDesc({ img, title, desc }) {
  return (
    <article className="member">
      <figure className="member__header">
        <img src={img} alt="멤버" />
      </figure>
      <div className="member__body">
        <h4>{title}</h4>
        <p className="desc">{desc}</p>
      </div>
    </article>
  );
}
function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>{memberTitle.title}</h3>
      <p>{memberTitle.desc}</p>
      <div className="member__inner container">
        {memberText.map((text, index) => (
          <MemberDesc
            key={index}
            img={text.img}
            title={text.title}
            desc={text.link}
          />
        ))}
      </div>
    </section>
  );
}
export default MemberSection;
