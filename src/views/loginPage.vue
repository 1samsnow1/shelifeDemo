<template>
    <section class="animate-contentFade-in h-screen flex flex-col justify-evenly items-center">
        <shelifeIcon/>
        <div v-if="fatherNumber==1">
            <loginSignUp :displayNumber="fatherNumber" @changeShowNumber="changeShowNumber"/>
        </div>
        <div v-if="fatherNumber==2">
            <ersalCode :registery="registery" :phoneNumber="phoneNumber" :displayNumber="fatherNumber" @changeShowNumber="changeShowNumber"/>
        </div>
        <div v-if="fatherNumber==3">
            <creatProfile :tellNumber="phoneNumber" :displayNumber="fatherNumber" @changeShowNumber="changeShowNumber"/>
        </div>
    </section>
    <!-- pinpicker package -->
</template>

<script setup>
import shelifeIcon from '../components/shelifeIcon.vue';
import loginSignUp from '../components/loginComponents/loginSignUp.vue';
import ersalCode from '../components/loginComponents/ersalCode.vue';
import creatProfile from '../components/loginComponents/creatProfile.vue';
import { ref, onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import {getCookie} from '@/assets/cooki.js';
const route = useRoute();
const router= useRouter();
let fatherNumber = ref(1);
let phoneNumber = ref(null);
let registery = ref(false);

const changeShowNumber = (newValue,pNumber,reg) =>{
    fatherNumber.value = newValue;
    phoneNumber.value = pNumber;
    registery.value = reg;
}
onMounted(()=>{
    if(getCookie('userName')){
        router.push('/home')
    }
})
</script>

<style scoped>
.active {
    display: block;
}
.inactive {
    display: none;
}
</style>