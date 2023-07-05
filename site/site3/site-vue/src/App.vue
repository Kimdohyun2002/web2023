<template>
  <HeaderCont attr="header__wrap tmoney300 bg-blue" />
  <router-view />
  <FooterCont attr="footer__wrap tmoney300 bg-blue" />
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue'
import FooterCont from '@/components/FooterCont.vue'

export default ((await import('vue')).defineComponent({
  components: {
    HeaderCont,
    FooterCont
  }
}))
</script>

<style lang="scss">
@import "index.scss"
</style>
