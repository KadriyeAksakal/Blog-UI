<template>
  <div>
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      :title="aboutList.bannerTitle"
      :desc="aboutList.bannerDesc"
      img-class="img-left"
    />
      <section class="about">
        <div class="container">
          <div>
            <h5>{{ aboutList.title }}</h5>
            <div>
              {{ aboutList.aboutMe}}
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import Header from 'components/Header/Header'

export default {
  name: 'PageAbout',
  components: {Header},
  meta: {
    title: 'Kadriye Aksakal Hakkında',
    meta: {
      myKey: {
        name: 'description',
        content: 'Kadriye Aksakal hakkında bilmek istedikleriniz.'
      },
      viewport: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    }
  },
  data() {
    return {
      aboutList: {},
      error: null
    }
  },
  mounted() {
    this.getAbout()
  },
  methods: {
    async getAbout() {
      this.aboutList = {}
      try {
        const response = await this.$axios.get('http://localhost:1337/api/abouts')
        this.aboutList = response.data.data[0].attributes
        // console.log(this.aboutList)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
