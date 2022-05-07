<template>
  <div>
    <Header
      headerClass="bg-writings"
      textClass="title-xl text-left"
      title="Yazılarım"
      desc=""
      img-class="img-left"
    />
    <q-page class="flex flex-center">

    </q-page>
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
  }
}
</script>
