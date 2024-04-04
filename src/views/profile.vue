<template>
    <div v-if="!userProfile">
        <loader/>
    </div>
    <section v-else class=" animate-contentFade-in">
        <!-- top section -->
        <div class="w-full p-4 flex justify-between items-center mb-2 md:max-w-2xl md:mx-auto">
            <div class="flex justify-center items-center gap-2">
                <figure class="w-16 h-16 profilebgc rounded-full flex items-center justify-center">
                    <img class="w-11/12 border border-transparent rounded-full" src="@/assets/image/userProfilePic.png" alt="userProfilePic">
                </figure>
                <div class="text-right">
                    <h3 class="text-base">{{ userProfile.first_name }}</h3>
                    <p class="text-sm text-gray-400">{{ userProfile.mobile }}</p>
                </div>
            </div>

            <button @click="goBack()">
                <goBackIcon/>

            </button>
        </div>

        <!-- bottom menu -->
        <div class="mb-12 md:max-w-2xl md:mx-auto">
            <ul class="flex flex-col justify-start items-start">
                <li class="w-full flex justify-start items-center gap-3 px-4 py-5 border-b border-profileLine">
                    <span>
                        <img src="@/assets/image/profileIcon.png" alt="profileIcon">
                    </span>
                    <router-link class="text-sm" to="/profile/editProfile">پروفایل کاربری</router-link>
                </li>

                <li class="w-full flex justify-start items-center gap-3 px-4 py-5 border-b border-profileLine">
                    <span>
                        <img src="@/assets/image/contactUsIcon.svg" alt="contactUs">
                    </span>
                    <router-link class="text-sm" to="/contactUs">راه های ارتباطی</router-link>
                </li>

                <li class="w-full flex justify-start items-center gap-3 px-4 pt-6 pb-5 border-b border-profileLine">
                    <span>
                        <img src="@/assets/image/aboutIcon.png" alt="about">
                    </span>
                    <router-link class="text-sm" to="/aboutUs">درباره شی لایف</router-link>
                </li>

                <li class="w-full flex justify-start items-center gap-3 px-4 pt-6 pb-5 border-b border-profileLine">
                    <span>
                        <img src="@/assets/image/hestoryIcon.png" alt="historyIcon">
                    </span>
                    <router-link class="text-sm" to="/history">تاریخچه آزمایشات</router-link>
                </li>

                <li class="w-full flex justify-start items-center gap-3 px-4 pt-6 pb-5 border-b border-profileLine">
                    <span>
                        <img src="@/assets/image/termsIcon.png" alt="hestoryIcon">
                    </span>
                    <router-link class="text-sm" to="/terms">قوانین و شرایط</router-link>
                </li>

                <li class="w-full flex justify-start items-center gap-3 px-4 pt-6 pb-5">
                    <span>
                        <img src="@/assets/image/poshtibaniIcon.png" alt="poshtibaniIcon">
                    </span>
                    <router-link class="text-sm" to="/home">پشتیبانی</router-link>
                </li>

                <button @click="deleteUser()" class="text-red font-bold">خروج</button>
            </ul>
        </div>
    </section>
</template>

<script setup>
import loader from '../components/Icons/loader.vue';
import goBackIcon from '../components/Icons/goBackIcon.vue';
import {onMounted,computed} from 'vue'
import { removeCookie } from '../assets/cooki';
import { useStore } from 'vuex';
import { RouterLink,useRouter } from 'vue-router';
const store = useStore();

let userProfile = computed(()=>{
    return store.getters.getUserProfile;
})
const router = useRouter();
const goBack = ()=>{
    router.go(-1);
};

const deleteUser = ()=>{
    removeCookie("token");
}
onMounted(()=>{
    store.dispatch("getUserProfileFromServer")
})
</script>

<style scoped>
.profilebgc {
background-image: linear-gradient(292.1deg, #2A70D9 25.25%, #D80037 55.65%, #FF7A00 91.72%);


}
</style>