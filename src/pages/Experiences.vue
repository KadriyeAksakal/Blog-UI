<template>
  <div>
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      :title="experienceInfo.bannerTitle"
      :desc="experienceInfo.bannerDesc"
      img-class="img-left"
    />
    <section class="contact-content detail">
      <div class="container">
        <div class="row q-col-gutter-lg justify-center" >
          <div class="col-sm-3" v-for="content in experienceList" :key="content.id">
            <div class="contact-content  detail-card">
              <img :src="`http://localhost:1337${content.attributes.media.data[0].attributes.url}`" :alt="content.attributes.mediaAltText"/>
              <div class="info">
                <label>{{content.attributes.companyName}}</label>
                <p>{{content.attributes.position}}</p>
                <span>{{content.attributes.companyExperience.slice(0,150)}}</span><br/>
<!--                <router-link :to="$route.path + '/' + content.id">
                  Daha Fazlası
                </router-link>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from 'components/Header/Header'

export default {
  name: 'PageExperiences',
  components: { Header },
  meta: {
    title: 'Kadriye Aksakal Deneyimlerim',
    meta: {
      myKey: {
        name: 'description',
        content: 'Kadriye Aksakal deneyimleri.'
      },
      viewport: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    }
  },
  data() {
    return {
      experienceInfo: {},
      experienceList: [],
      error: null
    }
  },
  mounted() {
    this.getExperienceInfo()
    this.getExperienceList()
  },
  methods: {
    async getExperienceList() {
      this.experienceList = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/experience-contents?populate=*')
        this.experienceList = response.data.data
        // console.log('sss', this.experienceList)
      } catch (error) {
        this.error = error
      }
    },
    async getExperienceInfo() {
      this.experienceInfo = {}
      try {
        const response = await this.$axios.get('http://localhost:1337/api/experiences')
        this.experienceInfo = response.data.data[0].attributes
        // console.log('sss', this.experienceInfo)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
