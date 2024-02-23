<template>
    <section class="w-screen h-screen flex flex-col justify-center items-center relative">
        <div class="w-screen h-screen my-auto mx-auto bg-shelifeRed-50 absolute border border-transparent
         z-0 animate-fullScreen"></div>
         <div class="w-screen h-screen flex flex-col justify-between items-center gap-3 py-8 px-6">
            <figure class="z-10 animate-fade-in">
                <img src="@/assets/image/landingShelifeTitle.png" alt="shelifeTitle">
            </figure>
            <div class="w-full flex flex-col justify-center items-center max-w-3xl z-10 animate-fade-in">
                <p class="text-sm text-white text-center mb-10">سلامتی و زیبایی ما در خطر است .</p>
                <button @click="goToHome()" class="w-full  bg-white text-shelifeRed-50 py-3 rounded-xl">همین الان شروع کن</button>
            </div>
         </div>
    </section>
</template>

<script setup>
import { RouterLink,useRouter } from 'vue-router';
const router = useRouter();
const goToHome = ()=>{
    router.push('/home')
}
</script>

<style scoped>
</style>