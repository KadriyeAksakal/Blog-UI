<template>
  <div v-for="writing in writingInfo" :key="writing.id">
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      :title="writing.attributes.bannerTitle"
      :desc="writing.attributes.bannerDesc"
      img-class="img-left"
    />
    <section class="contact-content detail">
      <div class="container">
        <div class="row q-col-gutter-lg justify-center" >
          <div class="col-sm-3" v-for="content in writing.attributes.writingContent" :key="content.id">
            <div class="contact-content  detail-card">
              <img :src="`http://localhost:1337${content.media}`" :alt="content.mediaAltText"/>
              <div class="info">
                <label>{{content.title}}</label>
                <span>{{content.letter.slice(0,200)}}</span><br/>
                <a href="/mobileitm-scm/">
                  Daha Fazlası
                </a>
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
  name: 'PageWritings',
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
      writingInfo: [],
      error: null
    }
  },
  mounted() {
    this.getWritingInfo()
  },
  methods: {
    async getWritingInfo() {
      this.writingInfo = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/writings?populate=*')
        this.writingInfo = response.data.data
        //console.log('sss', this.writingInfo)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
