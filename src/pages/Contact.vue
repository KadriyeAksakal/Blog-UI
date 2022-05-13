<template>
  <div>
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      title="İletişim"
      desc="Soru görüş ve önerileriniz için benimle iletişime geçin.."
      img-class="img-left"
    />
      <section class="contact-content detail">
        <div class="container">
          <h3 class="general--title small row justify-center">İletişim Adreslerim</h3>
          <div class="row q-col-gutter-lg justify-center" >
            <div class="col-sm-3" v-for="contact in contactList" :key="contact.id">
              <div class="contact-content  detail-card">
                <q-icon size="70px" font-size="70px" :name="contact.attributes.iconName" class="icon"/>
                <div class="info">
                  <label>{{contact.attributes.socialMediaName}}</label>
                  <span>{{contact.attributes.socialMediaAddress}}</span>
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
      error: null
    }
  },
  mounted() {
    this.getAbout()
  },
  methods: {
    async getAbout() {
      this.contactList = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/contacts')
        this.contactList = response.data.data
        console.log(this.contactList)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
