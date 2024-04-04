<template>
    <section class="animate-contentFade-in h-screen flex flex-col justify-evenly items-center">
        <shelifeIcon/>
        <div v-if="fatherNumber==1">
            <loginSignUp :displayNumber="fatherNumber" @changeShowNumber="changeShowNumber"/>
        </div>
        <div v-if="fatherNumber==2">
            <div class="mb-6">
                <h2 class="mb-2 font-bold text-lg">کد تایید را وارد کن</h2>
                <p class="text-gray-800">کد ارسال شده به شماره {{phoneNumber}} را وارد کن.</p>
            </div>
            <loaderVue v-if="loader"/>
            <ersalCode :displayNumber="fatherNumber" @verify="verify" @sendCodeAgain="sendCodeAgain" @smsCode="smsCode" @changeShowNumber="changeShowNumber"/>
        </div>
        <div v-if="fatherNumber==3">
            <creatProfile :phoneNumber="phoneNumber" @changeShowNumber="changeShowNumber"/>
        </div>
    </section>
    <!-- pinpicker package -->
</template>

<script setup>
import shelifeIcon from '../components/shelifeIcon.vue';
import loginSignUp from '../components/loginComponents/loginSignUp.vue';
import ersalCode from '../components/loginComponents/ersalCode.vue';
import creatProfile from '../components/loginComponents/creatProfile.vue';
import loaderVue from '../components/Icons/loader.vue';
import axios from 'axios';
import { ref, onMounted,computed,watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
import {getCookie} from '@/assets/cooki.js';

let userToken = ref(getCookie('token'))
watch(userToken, (newValue,oldValue)=>{
    if(newValue){
        console.log(newValue)
        if(registery.value == "register"){
            fatherNumber.value = 3;
        }else if(registery.value == "login"){
            router.push('/home');
        }
    }
})
let loader = ref(false);
const store = useStore();
const route = useRoute();
const router= useRouter();
// fatherNumber marhale ei hast ke karbar tooshe
let fatherNumber = ref(1);
let phoneNumber = ref(null);
// gottenCode codie ke karbar dariaft karde
let gottenCode = ref(null);

let registery = computed(()=>{
    return store.getters.getRegisteryStatus;
});

const changeShowNumber = (newValue,pNumber) =>{
    fatherNumber.value = newValue;
    phoneNumber.value = pNumber;
}

const sendCodeAgain = (usless)=>{
    let mobileNumber=new FormData();
    mobileNumber.append("mobile",phoneNumber.value);
    store.dispatch("sendTokenRequest",mobileNumber);
}
const smsCode = (smsCode)=>{
    gottenCode.value = smsCode;
    loader.value = true;
    verifyHandler();
}

const verifyHandler = ()=>{
    let userData = new FormData();
    userData.append("sms_token",gottenCode.value);
    userData.append("type",registery.value);
    userData.append("mobile",phoneNumber.value);
    if(registery.value == "register"){
        axios.post("/user/verify",userData).then((res)=>{
            let successStatus = res.data.success;
            if(successStatus){
                fatherNumber.value = 3;
            }else(
                alert("کد وارد شده اشتباه است")
            )
        })
        // store.dispatch("verifySmsCode",userData);
        // let successStatus = computed(()=>{
        //     return  store.getters.getVerifiedMessage
        // });
        // setTimeout(() => {
        //     if(successStatus.value){
        //         fatherNumber.value = 3;
        //     }
        // }, 2000);

    }else if(registery.value == "login"){
        axios.post("/user/verify",userData).then((res)=>{
            let successStatus = res.data.success;
            if(successStatus){
                router.push('/home');
            }else(
                alert("کد وارد شده اشتباه است")
            )
        })
        // store.dispatch("verifyLoginCode",userData);
        // let successStatus = computed(()=>{
        //     return  store.getters.getVerifiedMessage;
        // });
        // setTimeout(() => {
        //     if(successStatus.value){
        //         router.push('/home');
        //     }
        // }, 2000);
    }
}

const verify= (usless)=>{
    let successStatus = computed(()=>{
        return  store.getters.getVerifiedMessage
    });

    if(registery.value == "register"){
        if(successStatus.value){
            fatherNumber.value = 3;
        }

    }else if(registery.value == "login"){
        if(successStatus.value){
            router.push('/home');
        }
    }
}


onMounted(()=>{
    if(getCookie('token')){
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