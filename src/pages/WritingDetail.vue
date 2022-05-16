<template>
  <div>
    <Header
      headerClass="banner-bg"
      textClass="title-xl text-left"
      :title="title"
      desc=""
    />
    <section class="writingDetail">
      <div class="container">
        <div><img :src="`http://localhost:1337${imageUrl}`" :alt="mediaAltText"/></div>
        <div> {{letter}} </div>
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
      writing: [],
      title: '',
      letter: '',
      imageUrl: '',
      mediaAltText: '',
      error: null
    }
  },
  mounted() {
    this.getWriting()
    // console.log('path', this.$route.params.id)
  },
  methods: {
    async getWriting() {
      this.writing = []
      try {
        const response = await this.$axios.get('http://localhost:1337/api/writing-contents/' + this.$route.params.id + '?populate=*')
        this.writing = response.data.data
        this.title = this.writing.attributes.title
        this.letter = this.writing.attributes.letter
        this.imageUrl = this.writing.attributes.media.data.attributes.url
        this.mediaAltText = this.writing.attributes.mediaAltText
        console.log('sss', this.writing)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>

