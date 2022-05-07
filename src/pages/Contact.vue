<template>
  <div>
    <Header
      headerClass="bg-contact"
      textClass="title-xl text-left"
      title="İletişim"
      desc="Soru görüş ve önerileriniz için benimle iletişime geçin.."
      img-class="img-left"
    />
    <q-page class="flex flex-center">

    </q-page>
  </div>
</template>

<script>
import Header from 'components/Header/Header'

export default {
  name: 'PageContact',
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
  }
}
</script>
