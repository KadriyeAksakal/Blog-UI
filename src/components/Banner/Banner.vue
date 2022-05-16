<template>
  <section class="banner">
    <div class="container">
      <div class="row full-width">
        <div class="col-sm-6 col-xs-12" >
          <img v-if="imgClass" :class="imgClass" :src="require(`../../assets/avatar.jpeg`)"/>
        </div>
        <div class="col-sm-6 col-xs-12">
          <div class="text" :class="textClass">
            <h1>{{ title }} </h1> <b v-html="titleBold"></b>
            <p v-if="desc" v-html="desc"/>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BannerComponents',
  props: ['img', 'imgClass', 'title', 'titleBold', 'desc', 'textClass'],
  data () {
    return {}
  }
}
</script>
