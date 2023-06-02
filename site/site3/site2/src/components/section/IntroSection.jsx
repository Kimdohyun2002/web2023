function IntroSection(props) {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">코딩에 대한 설명</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>FRONTEND</span>
          <h3>
            코딩의
            <br />
            다양한 분야
          </h3>
          <p>
            프론트앤드 개발자로 취업하기 위한
            <br />
            전문 과정입니다.
            <br />
            여러분들도 도전해보세요!
          </p>
        </div>
        <div className="intro__desc">
          <div>
            <h4 className="icon-bg1">프론트엔드 개발자</h4>
            <p>
              프론트엔드 개발자는 사용자가 웹 사이트나 애플리케이션과 상호작용할 수 있도록 인터페이스를 개발합니다.
              HTML, CSS 및 JavaScript와 같은 웹 기술을 사용하여 웹 페이지의 디자인, 레이아웃 및 기능을 개발합니다.
              최근에는 프론트엔드 개발자는 React, Angular, Vue.js와 같은 프레임워크를 사용하여 보다 동적이고
              상호작용적인 사용자 경험을 제공하기도 합니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg2">백엔드 개발자</h4>
            <p>
              백엔드 개발자는 웹 애플리케이션의 서버 측 로직을 개발합니다. 데이터베이스와의 상호작용, 사용자 인증,
              데이터 처리 및 비즈니스 로직을 다루는 등의 작업을 수행합니다. 백엔드 개발자는 주로 서버 사이드 언어 및
              프레임워크를 사용하여 웹 애플리케이션의 기능을 구축하고 관리합니다. 예를 들어, Node.js, Python(Django,
              Flask), Ruby(Ruby on Rails), Java(Spring), PHP(Laravel) 등이 사용될 수 있습니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg3">모바일 앱 개발자</h4>
            <p>
              모바일 앱 개발자는 iOS나 Android와 같은 모바일 플랫폼을 대상으로 앱을 개발합니다. 모바일 앱 개발자는 해당
              플랫폼의 네이티브 언어와 도구를 사용하여 앱을 만들고, 사용자 인터페이스, 데이터 처리 및 기타 앱의 기능을
              개발합니다. 또한 React Native나 Flutter와 같은 크로스 플랫폼 프레임워크를 사용하여 한 번의 개발로 여러
              플랫폼에서 동작하는 앱을 만들기도 합니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg4">풀스택 개발자</h4>
            <p>
              풀스택 개발자는 프론트엔드와 백엔드 개발 모두를 다룰 수 있는 개발자를 말합니다. 즉, 웹 애플리케이션의 전체
              개발 프로세스를 이해하고 프론트엔드와 백엔드 양쪽에서 작업할 수 있습니다. 풀스택 개발자는 프론트엔드 기술,
              백엔드 기술, 데이터베이스 및 서버 설정과 같은 다양한 영역에 대한 폭넓은 이해를 필요로 합니다. 이러한
              종합적인 역량을 갖춘 풀스택 개발자는 개발 프로세스의 모든 측면을 다룰 수 있어 팀 내에서 유연하게 작업할 수
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
