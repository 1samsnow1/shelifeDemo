<template>
    <section class="flex justify-center items-center gap-3 text-xs sm:text-sm sm:gap-5 md:text-base md:gap-8">
        <router-link v-for="item in itemList" :key="item" :to="item.link">{{ item.title }}</router-link>
    </section>
</template>

<script setup>
    import {RouterLink} from 'vue-router'
    let itemList = [
        {title:'بلاگ',link: '/blogList'},
        {title:'شرایط و قوانین',link:'/terms'},
        {title:'سوالات متداول',link:'/FAQ'},
        {title:'درباره ما',link:'/aboutUs'},
        {title:'تماس با ما',link:'/contactUs'},
    ]
</script>