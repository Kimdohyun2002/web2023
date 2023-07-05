<template>
    <footer id="footer" :class="attr" role="contentinfo">
      <div class="footer__inner">
        <div class="footer__text">
          <h5>Kim do hyun</h5>
          <p>
            반가웠어요!
            <br />
            더 다양한 정보 확인
            <br />
            kshkmn0929@naver.com
          </p>
          <ul class="sns">
            <ul>
              <li>
                <a href="/">
                  <img src="../assets/images/footer/Facebook.svg" alt="페이스북" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="../assets/images/footer/Instagram.svg" alt="인스타" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="../assets/images/footer/YouTube.svg" alt="유튜브" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="../assets/images/footer/github.svg" alt="깃허브" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="../assets/images/footer/Discord.svg" alt="디스코드" />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div class="footer__menu">
          <div>
            <h4>사이트</h4>
            <ul>
              <li>
                <a href="/">웹표준 사이트</a>
              </li>
              <li>
                <a href="/">반응형 사이트</a>
              </li>
              <li>
                <a href="/">패럴랙스 사이트</a>
              </li>
              <li>
                <a href="/">포트폴리오 사이트</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>유형</h4>
            <ul>
              <li>
                <a href="/">이미지 유형</a>
              </li>
              <li>
                <a href="/">카드 유형</a>
              </li>
              <li>
                <a href="/">이미지/텍스트 유형</a>
              </li>
              <li>
                <a href="/">배너 유형</a>
              </li>
              <li>
                <a href="/">텍스트 유형</a>
              </li>
              <li>
                <a href="/">푸터 유형</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>스크립트</h4>
            <ul>
              <li>
                <a href="/">검색 이펙트</a>
              </li>
              <li>
                <a href="/">퀴즈 이펙트</a>
              </li>
              <li>
                <a href="/">마우스 이펙트</a>
              </li>
              <li>
                <a href="/">슬라이드 이펙트</a>
              </li>
              <li>
                <a href="/">패럴랙스 이펙트</a>
              </li>
              <li>
                <a href="/">게임 이펙트</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>레퍼런스</h4>
            <ul>
              <li>
                <a href="/">CSS</a>
              </li>
              <li>
                <a href="/">FONTS</a>
              </li>
              <li>
                <a href="/">BLOG</a>
              </li>
              <li>
                <a href="/">REFERENCE</a>
              </li>
              <li>
                <a href="/">TUTORIAL</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__right">Copyright 2022. All Rights Reserved. - Designed by Webstoryboy</div>
    </footer>
</template>

<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">
.footer__wrap {
    width: 100%;
    margin-top: 100px;
    padding: 30px 0 20px 0;
}
.footer__inner {
    width: 1280px;
    margin: 0 auto;
    display: flex;

    .footer__text {
        width: 30%;

        h5 {
            font-size: 18px;
            margin-bottom: 15px;
        }
        .sns > ul {
            display: flex;
        }
        .sns > ul > li {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #d9d9d9;
            position: relative;
            margin-right: 10px;
        }
        .sns > ul > li > a {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        p {
            margin-bottom: 15px;
        }
    }
    .footer__menu {
        width: 70%;
        display: flex;
        justify-content: space-between;

        div {
            margin-right: 100px;
        }

        h4 {
            font-size: 18px;
            margin-bottom: 20px;
        }
        ul > li {
            margin-bottom: 5px;
        }
    }
}
.footer__right {
    width: 1280px;
    border-top: 1px solid #000;
    margin: 50px auto;
    padding-top: 30px;
    text-align: center;
}

</style>
