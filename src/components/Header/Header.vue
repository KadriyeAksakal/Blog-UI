<template>
  <header :class="headerClass">
    <section class="navigation-container" :class="{change_color: scrollPosition > 50}">
      <div class="container">
        <div class="navigation">
          <ul v-for="menu in menuList" :key="menu.id">
            <li>
              <router-link :to="menu.attributes.menuItemPath">{{menu.attributes.menuItem}}</router-link>
            </li>
          </ul>
          <div class="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
            <div class="mobile-menu-list">
              <ul v-for="menu in menuList" :key="menu.id">
                <li><a :href="menu.attributes.menuItemPath">{{menu.attributes.menuItem}}</a></li>
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
  data() {
    return {
      scrollPosition: null,
      menuList: [],
      error: null
    }
  },
  mounted() {
    this.getMenu()
  },
  methods: {
    async getMenu() {
      this.menuList = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/menus')
        this.menuList = response.data.data
        console.log(this.menuList)
      } catch (error) {
        this.error = error
      }
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
