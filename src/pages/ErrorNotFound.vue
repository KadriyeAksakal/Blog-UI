<template>
  <div class="error-content text-white q-pa-md">
    <div class="container">
      <div class="content">
        <lord-icon
          src="https://cdn.lordicon.com/snvfoxut.json"
          trigger="loop"
          colors="outline:#121331,primary:#d4c4fb,secondary:#16c72e"
          style="width:250px;height:250px">
        </lord-icon>
        <div class="text">
          <div style="font-size: 17vh; font-weight: bold">
            404
          </div>
          <div class="text-h2" style="opacity:.3;">
            Üzgünümm.. Sayfa Bulunamadı :(
          </div>
        </div>
      </div>
      <div class="btn-container">
        <q-btn
          class="btn"
          color="white"
          text-color="purple-3"
          unelevated
          to="/"
          label="Ana Sayfaya Dön"
          no-caps
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorNotFound'
}
</script>
