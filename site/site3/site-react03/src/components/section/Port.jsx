import React from 'react';

const portTitle = {
  title: '포트폴리오 구경하기',
  desc: '웹개발자들의 다양한 포트폴리오 입니다.',
};

const portText = [
  {
    portImg: '../../assets/images/port/port_img1.png',
    iconImg: '../assets/images/Member/peep-1.svg',
    title: '김도현 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: '../../assets/images/port/port_img2.png',
    iconImg: '../assets/images/Member/peep-2.svg',
    title: '김도현 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: '../../assets/images/port/port_img3.png',
    iconImg: '../assets/images/Member/peep-3.svg',
    title: '김도현 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: '../../assets/images/port/port_img4.png',
    iconImg: '../assets/images/Member/peep-4.svg',
    title: '김도현 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: '../../assets/images/port/port_img5.png',
    iconImg: '../assets/images/Member/peep-5.svg',
    title: '김도현 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: '../../assets/images/port/port_img6.png',
    iconImg: '../assets/images/Member/peep-6.svg',
    title: '김도현 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
];

function PortDesc({ portImg, iconImg, title, desc }) {
  return (
    <div className="port">
      <figure className="port__header">
        <img src={portImg} alt="멤버" />
      </figure>
      <div className="port__body">
        <span>
          <img src={iconImg} alt="멤버" />
        </span>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>{portTitle.title}</h3>
      <p>{portTitle.desc}</p>
      <div className="port__inner">
        <div className="port__btn">
          <div className="port__btn1">21기</div>
          <div className="port__btn1">22기</div>
          <div className="port__btn1">23기</div>
          <div className="port__btn1 ">24기</div>
        </div>
        <div className="port__cont">
          {portText.map((text, index) => (
            <PortDesc
              key={index}
              portImg={text.portImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PortSection;
