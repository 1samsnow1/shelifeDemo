<template>
    <section class="w-full px-5 py-8 bg-footerColor flex flex-col justify-center items-center gap-6">
        <homeFooterList/>
        <footerIcons/>
        <footerImage/>
    </section>
</template>

<script setup>
import homeFooterList from './homeFooterComponent/homeFooterList.vue';
import footerIcons from './homeFooterComponent/footerIcons.vue';
import footerImage from './homeFooterComponent/footerImages.vue'
</script>