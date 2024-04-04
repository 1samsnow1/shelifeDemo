<template>
  <RouterView />
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { getCookie } from './assets/cooki.js'
if(getCookie("token")){
axios.defaults.headers.common["authorization"] = "Bearer"+" "+ getCookie("token");
}
</script>

<style scoped>

</style>
