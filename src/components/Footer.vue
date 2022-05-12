<template>
  <footer>
    <div class="container border-top">
      <div class="row justify-center">
        <img src="../../assets/mobile-item-logo-black.svg"/>
      </div>
      <div class="row q-pb-md">
        <div class="col-sm-3 flex">
          <ul>
            <li><a href="/mobileitm-scm/">{{ $t('mobileItemSCM') }}</a></li>
            <li><a href="/mobileitm-mdm/">{{ $t('mobileItemMDM') }}</a></li>
            <li><a href="/faqs">{{ $t('faqs') }}</a></li>
          </ul>
          <ul>
            <li><a href="/about">{{ $t('about') }}</a></li>
            <li><a href="/references">{{ $t('references') }}</a></li>
            <li><a href="/contact">{{ $t('contact') }}</a></li>
          </ul>
        </div>
        <div class="col-sm-5">
          <p>{{ $t('office1') }}:<br>İçerenköy Mah. Kayışdağı Cad. Erenler İş merkezi <br> No:82/6 Ataşehir / İstanbul</p>
          <p>{{ $t('office2') }}:<br>Bilişim Vadisi, Muallimköy Mahallesi Deniz Caddesi 41400 Gebze Kocaeli-Türkiye</p>
          <a href="mailto:destek@mobileitm.com">destek@mobileitm.com</a><br>
          <a href="tel:+90216573 00 02">+90 (216) 573 00 02</a>
        </div>
        <div class="col-sm-4 form-container">
          <p>{{ $t('footerQue') }}</p>
          <div class="flex">
            <q-form ref="newsletterForm">
              <q-input placeholder="E-Mail" v-model="email" :rules="[val => !!val || 'Lütfen E-Posta adresinizi giriniz', isValidEmail]"/>
            </q-form>
            <button type="button" class="btn btn--primary" @click="sendNewsletterForm"> {{ $t('register') }}</button>
          </div>
        </div>
      </div>
      <div class="flex justify-between align-center border-top">
        <span>Copyright © Mobile ITM</span>
        <span>{{ $t('kvkk') }}</span>
        <span>2021</span>
      </div>
      <Dialog img="demo-message.png" img2="check.png" :show="showSuccessPopup" imgClass="img-left"  :imgLeft="true"
              :title="$t('demoSuccessMessageHeader')" :titleBold="$t('demoSuccessMessage')"
              :button="$t('demoFormMessage')" type="success" v-model="showSuccessPopup" v-on:closepopup="close" />

      <Dialog img2="close.png" :title="$t('demoErrorMessageHeader')" :titleBold="$t('demoErrorMessage')"
              :button="$t('demoFormMessage')" type="error" :show="showErrorPopup" v-model="showErrorPopup" v-on:closepopup="close" />
    </div>
  </footer>
</template>

<script>
import { catchAxiosError } from 'src/lib/axios'
import Dialog from 'components/Dialog/Dialog'

export default {
  components: { Dialog },
  data () {
    return {
      email: '',
      showSuccessPopup: false,
      showErrorPopup: false
    }
  },
  props: ['img', 'img2', 'imgClass', 'imgRight', 'imgLeft', 'title', 'titleBold', 'button', 'textClass', 'type'],
  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Lütfen geçerli bir e-posta adresi giriniz'
    },
    sendNewsletterForm () {
      this.$refs.newsletterForm.validate()
        .then(success => {
          if (success) {
            this.$axios.post('/request/subscribe', {
              email: this.email
            })
              .then(resp => {
                if (resp.data.Success) {
                  this.showSuccessPopup = true
                } else {
                  this.showErrorPopup = true
                }
              })
              .catch(err => {
                catchAxiosError(err)
              })
          }
        })
    },
    close () {
      this.showSuccessPopup = false
      this.showErrorPopup = false
    }
  }
}

</script>
