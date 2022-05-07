<template>
  <div>
    <Header
      headerClass="bg-about"
      textClass="title-xl text-left"
      title="Hakkımda"
      desc="Kısa hayatımın kısa bir özeti.."
      img-class="img-left"
    />
    <q-page class="flex flex-center">

    </q-page>
  </div>
</template>

<script>
import Header from 'components/Header/Header'

export default {
  name: 'PageAbout',
  components: { Header },
  meta: {
    title: 'Kadriye Aksakal Hakkında',
    meta: {
      myKey: {
        name: 'description',
        content: 'Kadriye Aksakal hakkında bilmek istedikleriniz.'
      },
      viewport: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    }
  }
}
</script>
