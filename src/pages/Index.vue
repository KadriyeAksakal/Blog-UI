<template>
  <div>
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      title="Kadriye Aksakal"
      desc="Front-End Developer"
      img-class="img-left"
    />
    <section class="contact-content detail">
      <div class="container">
        <h5>Deneyimlerim</h5>
        <div class="row q-col-gutter-lg justify-center">
          <div class="col-sm-3" v-for="(content, index) in experienceList" :key="'content.id'+ index" v-show="index <= 3">
            <div class="contact-content  detail-card">
              <img :src="`http://localhost:1337${content.attributes.media.data[0].attributes.url}`" :alt="content.attributes.mediaAltText"/>
              {{content.attributes.media.data.attributes}}
              <div class="info">
                <label>{{content.attributes.companyName}}</label>
                <p>{{content.attributes.position}}</p>
                <span>{{content.attributes.companyExperience.slice(0,150)}}</span><br/>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/experiences" class="moreBtn">Daha Fazlası</router-link>
      </div>
    </section>

    <section class="contact-content detail">
      <div class="container">
        <h5>Yazılarım</h5>
        <div class="row q-col-gutter-lg justify-center" >
          <div class="col-sm-3" v-for="content in writingList" :key="content.id">
            <div class="contact-content  detail-card">
              <img :src="`http://localhost:1337${content.attributes.media.data.attributes.url}`" :alt="content.attributes.mediaAltText"/>
              <div class="info">
                <label>{{content.attributes.title}}</label>
                <span>{{content.attributes.letter.slice(0,150)}}</span><br/>
                <router-link :to="'/writings/' + content.id">
                  Daha Fazlası
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/writings" class="moreBtn">Daha Fazlası</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Header from 'components/Header/Header'

export default {
  name: 'PageIndex',
  components: { Header },
  meta: {
    title: 'Kadriye Aksakal Blog',
    meta: {
      myKey: {
        name: 'description',
        content: 'Kadriye Aksakal blog sayfası.'
      },
      viewport: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    }
  },
  data() {
    return {
      experienceList: [],
      writingList: [],
      error: null
    }
  },
  mounted() {
    this.getExperienceList()
    this.getWritingList()
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
    async getWritingList() {
      this.writingList = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/writing-contents?populate=*')
        this.writingList = response.data.data
        //console.log('sss', this.writingInfo)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
