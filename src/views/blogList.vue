<template>
    <section class="animate-contentFade-in">
        <section class="p-8">
            <homeHeader/>
        </section>

        <div class=" border-b-2">
            <h2 class="w-20 border-b-2 border-buttonColor transform -translate-x-8 text-center text-sm">خدمات</h2>
        </div>  
        <h2 class="hidden text-xl text-right mt-10 font-bold px-8 sm:block">آموزش ها</h2>
        <section class="grid grid-cols-1 gap-4 my-10 px-4 sm:grid-cols-2">
            <educationCard v-for="i in 8"/>
        </section>

    </section>
</template>

<script setup>
import educationCard from '../components/homeComponent/educationCard.vue';
import homeHeader from '../components/homeComponent/homeHeader.vue';

</script>