<template>
    <article class=" grid grid-cols-5 gap-2 p-2 shadow-md border border-transparent rounded-2xl">
        <div class=" h-auto bg-gray-200 border rounded-2xl col-span-2">
            <img class="" :src="props.itemInfo.media_showcase.main_image.original_url" alt="image"/>
        </div>
        <div class="flex flex-col items-start justify-between gap-3 col-span-3">
            <h3 class="text-lg ">{{ props.itemInfo.title }}</h3>
            <span class="text-xs">دسته بندی: {{ props.itemInfo.category.name }}</span>
            <p class="text-sm text-justify">
                {{ props.itemInfo.summary }}
            </p>
            <div class="w-full flex justify-end">
                <button class="px-3 py-2 bg-buttonColor border border-transparent rounded-xl text-white text-left
                text-sm">
                    <router-link :to="`/blog/${props.itemInfo.id}`">مشاهده بیشتر</router-link>
                </button>
            </div>
        </div>
    </article>
</template>

<script setup>
import {RouterLink} from 'vue-router';

let props = defineProps(['itemInfo']);
</script>