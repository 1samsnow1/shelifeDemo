<template>
    <section class="w-screen h-screen flex flex-col justify-center items-center relative">
        <div class="w-screen h-screen my-auto mx-auto bg-shelifeRed-50 absolute border border-transparent
         z-0 animate-fullScreen"></div>
         <div class="w-screen h-screen flex flex-col justify-between items-center py-8 px-6">
            <figure class="z-10 animate-fade-in">
                <img src="@/assets/image/landingShelifeTitle.png" alt="shelifeTitle">
            </figure>

            <div class="z-10 relative flex justify-center">
                <img class="z-30 h-80" src="@/assets/image/welcomeAnimation1.png" alt="shelifeWelcomePic">
                <img class="anime z-20 absolute welcome2" src="@/assets/image/welcomeAnimation2.png" alt="shelifeWelcomePic">
                <img class="anime z-20 absolute welcome3" src="@/assets/image/welcomeAnimation3.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome4" src="@/assets/image/welcomeAnimation4.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome5" src="@/assets/image/welcomeAnimation5.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome5_2" src="@/assets/image/welcomeAnimation5_2.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome6" src="@/assets/image/welcomeAnimation6.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome62" src="@/assets/image/welcomeAnimation62.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome63" src="@/assets/image/welcomeAnimation63.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome6_2" src="@/assets/image/welcomeAnimation6_2.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome6_3" src="@/assets/image/welcomeAnimation6_3.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome6_4" src="@/assets/image/welcomeAnimation6_4.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome7" src="@/assets/image/welcomeAnimation7.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome8" src="@/assets/image/welcomeAnimation8.png" alt="shelifeWelcomePic">
                <img class="anime z-10 absolute welcome9" src="@/assets/image/welcomeAnimation9.png" alt="shelifeWelcomePic">
            </div>
            <div class="w-full flex flex-col justify-center items-center max-w-3xl z-10 animate-fade-in">
                <p class="text-sm text-white text-center mb-10">سلامتی و زیبایی ما در خطر است .</p>
                <button @click="goToHome()" class="w-full  bg-white text-shelifeRed-50 py-3 rounded-xl">همین الان شروع کن</button>
            </div>
         </div>
    </section>
</template>

<script setup>
import { RouterLink,useRouter } from 'vue-router';
import { ref,onMounted } from 'vue';

const router = useRouter();
const goToHome = ()=>{
    router.push('/home')
}
let animeCounter = ref(0);
setInterval(() => {
    animeCounter.value += 1;
}, 1200);
</script>

<style scoped>
.welcome2{
    opacity: 1;
    bottom: 4px;
    left: -58px;
    animation: anime2 linear 1s;
}
@keyframes anime2 {
    0%{
        left: 0;
        opacity: 0;
    }
    50% {
        left: 0;
        opacity: 0;
    }
    100% {
        left: -58px;
        opacity: 1;
    }
}
.welcome3 {
    bottom: 4px;
    right: -38px;
    animation: anime3 linear 2s;
}
@keyframes anime3 {
    0%{
        right: 0;
        opacity: 0;
    }
    50% {
        right: 0;
        opacity: 0;
    }
    100%{
        opacity: 1;
        right: -38;
    }
}
.welcome4 {
    bottom: 30px;
    left: -45px;
    animation: anime4 linear 3s;
}
@keyframes anime4 {
    0%{
        left: 0;
        opacity: 0;
    }
    50% {
        left: 0;
        opacity: 0;
    }
    100% {
        left: -45px;
        opacity: 1;
    }
}
.welcome5 {
    bottom: 30px;
    right: -34px;
    animation: anime5 linear 4s;
}
.welcome5_2 {
    bottom: 20px;
    right: -40px;
    animation: anime5_2 linear 4s;
}
@keyframes anime5 {
    0%{
        opacity: 0;
        right: 0;
    }
    50% {
        opacity: 0;
        right: 0;
    }
    100% {
        opacity: 1;
        right: -34px;
    }
}
@keyframes anime5_2 {
    0%{
        opacity: 0;
        right: 0;
    }
    50% {
        opacity: 0;
        right: 0;
    }
    100% {
        opacity: 1;
        right: -40px;
    }
}
.welcome6 , .welcome62 , .welcome63{
    left: -100px;
    animation: anime6_1 linear 5s;
}
.welcome6 {
    bottom: 80px;
}
.welcome62 {
    bottom: 100px;
    left: -75px;
}
.welcome63 {
    bottom: 70px;
}
@keyframes anime6_1 {
    0%{
        opacity: 0;
        left: 0;
    }
    50% {
        opacity: 0;
        left: 0;
    }
    100% {
        opacity: 1;
        left: -100px;
    }
}
.welcome6_2 , .welcome6_3 , .welcome6_4 {
    right: -67px;
    animation: anime6_2 linear 5s;
}
.welcome6_2 {
    bottom: 54px;
}
.welcome6_3 {
    bottom: 40px;
}
.welcome6_4 {
    bottom: 20px;
}
@keyframes anime6_2 {
    0%{
        opacity: 0;
        right: 0;
    }
    50% {
        opacity: 0;
        right: 0;
    }
    100% {
        opacity: 1;
        right: -67px;
    }
}
.welcome7 {
    top: 10px;
    right: -44px;
    animation: anime7 linear 6s;
}
@keyframes anime7 {
    0%{
        opacity: 0;
        right: 0;
    }
    50% {
        opacity: 0;
        right: 0;
    }
    100% {
        opacity: 1;
        right: -44px;
    }
}
.welcome8 {
    top:60px;
    left: -45px;
    animation: anime8 linear 6.5s;
}
@keyframes anime8 {
    0%{
        opacity: 0;
        left: 0;
    }
    50% {
        opacity: 0;
        left: 0;
    }
    100% {
        opacity: 1;
        left: -45px;
    }
}

.welcome9 {
    top: 10px;
    left: -25px;
    animation: anime9 linear 7s;
}
@keyframes anime9 {
    0%{
        opacity: 0;
        left: 0;
    }
    50% {
        opacity: 0;
        left: 0;
    }
    100% {
        opacity: 1;
        left: -25px;
    }
}
</style>