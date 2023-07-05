<template>
    <div id="header" :class="attr" role="heading" aria-level="1">
      <div class="header__inner container">
        <h1 class="header__logo">
          <router-link to="/">
            web <em>site</em>
          </router-link>
        </h1>
        <nav class="header__nav" role="navigation">
          <ul>
            <li>
              <router-link to="/member">멤버</router-link>
            </li>
            <li>
              <router-link to="/port">포트폴리오</router-link>
            </li>
            <li>
              <router-link to="/youtube">유튜브</router-link>
            </li>
            <li>
              <router-link to="/unsplash">이미지</router-link>
            </li>
            <li>
              <router-link to="/movie">영화</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">
.header__wrap {
    background-color: var(--bg_section);
}
.header__inner {
    text-align: center;

    .header__logo {
        width: 100%;

        a {
            font-size: 30px;
            display: inline-block;
            padding: 5px;
            margin: 5px;
            text-transform: uppercase;
            font-weight: 800;

            em {
                text-transform: lowercase;
                font-weight: 500;
            }
        }
    }
    .header__nav {
        width: 100%;
        ul {
            padding: 0 10%;
            display: flex;
            justify-content: space-between;

            li {
                a {
                    display: inline-block;
                    padding: 10px;
                    margin: 2px;
                    position: relative;

                    &::before {
                        content: '';
                        width: calc(100% - 20px);
                        height: 2px;
                        background-color: var(--color_body);
                        position: absolute;
                        left: 11px;
                        bottom: 4px;
                        transform: scaleX(0);
                        transition: all 0.3s ease;
                    }

                    &:hover::before {
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
}
</style>
