<template>
    <router-link :to="props.cardInfo.link">
        <article class="w-auto md:74 flex justify-start items-center gap-3 border-2 cardShadow rounded-2xl">
        <figure class="w-18">
            <img class="w-full" src="@/assets/image/shelifePic.png" alt="shelifePic">
        </figure>

        <div class=" text-right pl-2">
            <h3 class=" text-lg mb-1">{{ props.cardInfo.title }}</h3>
            <p class=" text-sm text-gray-400">{{ props.cardInfo.desc }}</p>
        </div>
    </article>
    </router-link>
</template>

<script setup>
import {RouterLink} from 'vue-router';
let props = defineProps(['cardInfo'])

</script>