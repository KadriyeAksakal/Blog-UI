<template>
  <div v-for="contact in contactInfo" :key="contact.id">
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      :title="contact.attributes.bannerTitle"
      :desc="contact.attributes.bannerDesc"
      img-class="img-left"
    />
      <section class="contact-content detail">
        <div class="container">
          <h3 class="general--title small row justify-center">{{contact.attributes.contentTitle}}</h3>
          <div class="row q-col-gutter-lg justify-center" >
            <div class="col-sm-3" v-for="contactContent in contactList" :key="contactContent.id">
              <div class="contact-content  detail-card">
                <q-icon size="70px" font-size="70px" :name="contactContent.attributes.iconName" class="icon"/>
                <div class="info">
                  <label>{{contactContent.attributes.socialMediaName}}</label>
                  <span>{{contactContent.attributes.socialMediaAddress}}</span>
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
      contactList: [],
      contactInfo: [],
      error: null
    }
  },
  mounted() {
    this.getContactList()
    this.getContactInfo()
  },
  methods: {
    async getContactList() {
      this.contactList = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/contact-contents')
        this.contactList = response.data.data
        console.log(response.data.data)
      } catch (error) {
        this.error = error
      }
    },
    async getContactInfo() {
      this.contactInfo = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/contacts')
        this.contactInfo = response.data.data
        // console.log(response.data.data)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
