<template>
  <div>
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      :title="writing.title"
      desc=""
    />
    <section class="writingDetail">
      <div class="container">
        <div><img :src="`http://localhost:1337${imageUrl}`" :alt="writing.mediaAltText"/></div>
        <div> {{writing.letter}} </div>
      </div>
    </section>
  </div>
</template>

<script>

import Header from 'components/Header/Header'

export default {
  name: "WritingDetail",
  components: {Header},
  meta: {
    title: 'Yazı Detay Sayfası',
    meta: {
      myKey: {
        name: 'description',
        content: ''
      },
      viewport: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    }
  },
  data() {
    return {
      writing: {},
      imageUrl: '',
      error: null
    }
  },
  mounted() {
    this.getWriting()
    // console.log('path', this.$route.params.id)
  },
  methods: {
    async getWriting() {
      this.writing = {}
      try {
        const response = await this.$axios.get('http://localhost:1337/api/writing-contents/' + this.$route.params.id + '?populate=*')
        this.writing = response.data.data.attributes
        this.imageUrl = this.writing.media.data.attributes.url
        // console.log('sss', this.writing)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>

