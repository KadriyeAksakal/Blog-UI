<template>
  <header :class="headerClass">
    <section class="navigation-container" :class="{change_color: scrollPosition > 50}">
      <div class="container">
        <div class="navigation">
          <ul>
            <li>
              <router-link to="/">Ana Sayfa</router-link>
            </li>
            <li>
              <router-link to="/about">Hakkında</router-link>
            </li>
            <li>
              <router-link to="/projects">Projeler</router-link>
            </li>
            <li>
              <router-link to="/writings">Yazılar</router-link>
            </li>
            <li>
              <router-link to="/experiences">Deneyimler</router-link>
            </li>
            <li>
              <router-link to="/contact">İletişim</router-link>
            </li>
          </ul>
          <div class="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
            <div class="mobile-menu-list">
              <ul>
                <li><a href="/">Ana Sayfa</a></li>
                <li><a href="/about">Hakkında</a></li>
                <li><a href="/projects">Projeler</a></li>
                <li><a href="/writings">Yazılar</a></li>
                <li><a href="/experiences">Deneyimler</a></li>
                <li><a href="/contact">İletişim</a></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </section>
    <Banner :img="img" :imgClass="imgClass"  :textClass="textClass" :title="title" :titleBold="titleBold" :desc="desc" />
  </header>
</template>

<script>
import Banner from 'components/Banner/Banner'

export default {
  props: ['img', 'imgClass', 'title', 'titleBold', 'desc', 'textClass', 'headerClass'],
  components: { Banner },
  name: 'HeaderComponents',
  data () {
    return {
      scrollPosition: null
    }
  }
}
</script>

<style scoped>
.change_color {
  padding: 20px 0px 20px 0px;
  background-color: #071031;
}
</style>
