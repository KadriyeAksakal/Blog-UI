<template>
  <div>
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      :title="contactInfo.bannerTitle"
      :desc="contactInfo.bannerDesc"
      img-class="img-left"
    />
      <section class="contact-content detail">
        <div class="container">
          <h3 class="general--title small row justify-center">{{contactInfo.contentTitle}}</h3>
          <div class="row q-col-gutter-lg justify-center">
            <div class="col-sm-3" v-for="content in contactInfo.content" :key="content.id">
              <div class="contact-content  detail-card">
                <q-icon size="70px" font-size="70px" :name="content.iconName" class="icon"/>
                <div class="info">
                  <label>{{content.socialMediaName}}</label>
                  <span>{{content.socialMediaAddress}}</span>
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
  name: 'PageContact',
  components: {Header},
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
      contactInfo: [],
      error: null
    }
  },
  mounted() {
    this.getContactInfo()
  },
  methods: {
    async getContactInfo() {
      this.contactInfo = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/contacts?populate=*')
        this.contactInfo = response.data.data[0].attributes
        // console.log(response.data.data)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
