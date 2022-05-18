<template>
  <div>
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      :title="writingInfo.bannerTitle"
      :desc="writingInfo.bannerDesc"
      img-class="img-left"
    />
    <section class="contact-content detail">
      <div class="container">
        <div class="row q-col-gutter-lg justify-center" >
          <div class="col-sm-3" v-for="content in writingList" :key="content.id">
            <div class="contact-content  detail-card">
              <img :src="`http://localhost:1337${content.attributes.media.data.attributes.url}`" :alt="content.attributes.mediaAltText"/>
              <div class="info">
                <label>{{content.attributes.title}}</label>
                <span>{{content.attributes.letter.slice(0,150)}}</span><br/>
                <router-link :to="$route.path + '/' + content.id">
                  Daha Fazlası
                </router-link>
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
    title: 'Kadriye Aksakal Yazıları',
    meta: {
      myKey: {
        name: 'description',
        content: 'Kadriye Aksakal bilgi ve deneyimlerimden yola çıkarak yazdığım yazılar.'
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
      writingList: [],
      error: null
    }
  },
  mounted() {
    this.getWritingInfo()
    this.getWritingList()
  },
  methods: {
    async getWritingList() {
      this.writingList = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/writing-contents?populate=*')
        this.writingList = response.data.data
        //console.log('sss', this.writingInfo)
      } catch (error) {
        this.error = error
      }
    },
    async getWritingInfo() {
      this.writingInfo = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/writings?populate[writingContent][populate]=*')
        this.writingInfo = response.data.data[0].attributes
        //console.log('sss', this.writingInfo)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
