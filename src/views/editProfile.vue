<template>
    <section class=" animate-contentFade-in max-w-2xl mx-auto">
        <button @click="goBack()" class="w-full flex justify-start p-5 mb-10">
            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1415_5071)">
<rect width="45" height="45" rx="11.2009" transform="matrix(-1 0 0 1 48 0)" fill="white"/>
<rect x="-0.580357" y="0.580357" width="43.8393" height="43.8393" rx="10.6205" transform="matrix(-1 0 0 1 46.8393 0)" stroke="url(#paint0_linear_1415_5071)" stroke-width="1.16071"/>
<path d="M33.1563 21.7072C33.1563 20.8562 32.4505 20.1504 31.5994 20.1504L19.1447 20.1504C18.2937 20.1504 17.5879 20.8562 17.5879 21.7072C17.5879 22.5583 18.2937 23.2641 19.1447 23.2641L31.5994 23.2641C32.4505 23.2641 33.1563 22.5583 33.1563 21.7072Z" fill="url(#paint1_linear_1415_5071)"/>
<path d="M35.2323 21.7067C35.2323 21.3123 35.087 20.9179 34.7756 20.6066L28.5483 14.3792C27.9463 13.7772 26.9499 13.7772 26.348 14.3792C25.746 14.9812 25.746 15.9776 26.348 16.5795L31.4751 21.7067L26.348 26.8339C25.746 27.4359 25.746 28.4323 26.348 29.0342C26.9499 29.6362 27.9463 29.6362 28.5483 29.0342L34.7756 22.8069C35.087 22.4955 35.2323 22.1011 35.2323 21.7067Z" fill="url(#paint2_linear_1415_5071)"/>
</g>
<defs>
<filter id="filter0_d_1415_5071" x="0.678571" y="0" width="51.9643" height="51.9643" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2.32143" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1415_5071"/>
<feOffset dx="1.16071" dy="3.48214"/>
<feGaussianBlur stdDeviation="2.90179"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1415_5071"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1415_5071" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1415_5071" x1="45" y1="3.69399" x2="-1.29191" y2="5.42561" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF4F62"/>
<stop offset="0.5" stop-color="#FFAAA9"/>
<stop offset="1" stop-color="#FF4F62"/>
</linearGradient>
<linearGradient id="paint1_linear_1415_5071" x1="13.8515" y1="21.7072" x2="37.5154" y2="21.7072" gradientUnits="userSpaceOnUse">
<stop offset="0.239583" stop-color="#E72F5E"/>
<stop offset="0.84375" stop-color="#BC2A4F"/>
</linearGradient>
<linearGradient id="paint2_linear_1415_5071" x1="23.6559" y1="21.7067" x2="37.8464" y2="21.7067" gradientUnits="userSpaceOnUse">
<stop offset="0.239583" stop-color="#E72F5E"/>
<stop offset="0.84375" stop-color="#BC2A4F"/>
</linearGradient>
</defs>
</svg>

        </button>
        <div class="flex justify-center items-center mb-14">
            <shelifeIcon/>
        </div>
        <form action="" class="px-8">
            <div class="mb-12">
                <h2 class="text-lg mb-3 font-bold">ویرایش و مدیریت پروفایل کاربری</h2>
                <p class=" text-sm text-gray-600">اطلاعات و تاریخچه ازمایشات شما محرمانه میماند ! </p>
            </div>

            <div class="w-full relative p-2 border-2 border-shelifeRed-100 rounded-2xl mb-6">
                <label for="" class="text-gray-600 absolute bg-white px-0.5 bottom-10 right-4">*نام و نام خانوادگی :</label>
                <input v-model="userName" type="text" class="w-full rounded-lg focus:outline-none px-3 py-1" placeholder="محمد">
            </div>
            <div class="datePickerStyle w-full relative p-2 border-2 border-shelifeRed-100 rounded-2xl">
                <label for="" class="text-gray-600 absolute bg-white px-0.5 bottom-10 right-4">تاریخ تولد :</label>
                <input v-model="date" type="text" class="custom-input w-full rounded-lg focus:outline-none px-3 py-1" placeholder="1402/4/20"/>
                <date-picker v-model="date" format="YYYY-MM-DD" display-format="jYYYY-jMM-jDD" custom-input=".custom-input"/>
            </div>

            <button type="button" @click="updateProfile()" class="loginBtn mt-12 mb-14 w-full">تایید</button>
        </form>
    </section>  
</template>

<script setup>
import shelifeIcon from '../components/shelifeIcon.vue';
import DatePicker from 'vue3-persian-datetime-picker';
import {useRouter} from 'vue-router';
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
let userName = ref('');
let date = ref('');
const router = useRouter();
const goBack = ()=>{
    router.go(-1);
};

const updateProfile = ()=>{
    let FullName = userName.value.split(" ")
    let first_name = FullName[0];
    let last_name = FullName[1];
    let fd = new FormData();
    fd.append("_method","PATCH");
    fd.append("first_name",first_name);
    fd.append("last_name",last_name);
    fd.append("birth_date",data.value);
    store.dispatch("updateUserProfileFromServer",fd);
}
</script>

<style>
</style>