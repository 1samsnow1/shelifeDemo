<template>
    <div class="w-full flex flex-col items-center gap-8">
        <div>
            <h2 class="mb-2 font-bold text-lg">کد تایید را وارد کن</h2>
            <p class="text-gray-800">کد ارسال شده به شماره {{props.phoneNumber}} را وارد کن.</p>
        </div>
        <div class="w-full flex justify-center gap-4">
            <input type="tell" class="w-12 h-12 border border-red-600 rounded-2xl">
            <input type="tell" class="w-12 h-12 border border-red-600 rounded-2xl">
            <input type="tell" class="w-12 h-12 border border-red-600 rounded-2xl">
            <input type="tell" class="w-12 h-12 border border-red-600 rounded-2xl">
        </div>
        <button type="button" class="w-full loginBtn" @click="goNext()">تایید</button>
        <button type="button" class="w-full bg-green-600 text-white rounded-xl shadow-inner py-3.5 px-20 buttonS2">ارسال مجدد کد</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import {setCookie} from '@/assets/cooki.js';
const router = useRouter();
const props = defineProps(['displayNumber','phoneNumber','registery']);
const emit = defineEmits();
let usersInfo = [{phoneNumber:'09331712156',name:'محمد علی کابوسی',codeMeli:'4580415175'},{phoneNumber:'09331712143',name:'علی رضا حبیبی',codeMeli:'4580417175'}];
let userInfo = ref({});
usersInfo.forEach(obj => {
    if(obj.phoneNumber==props.phoneNumber.value){
        userInfo.phoneNumber = obj.phoneNumber;
        userInfo.name = obj.name;
        userInfo.codeMeli = obj.codeMeli;
    }
});
const goNext =()=>{
    if(props.registery){
        setCookie('phoneNumber',userInfo.phoneNumber,30,'/');
        setCookie('userName',userInfo.name,30,'/');
        setCookie('codeMeli',userInfo.codeMeli,30,'/');
        router.push('/home')
    }else {
        emit('changeShowNumber',newValue+1,props.phoneNumber,true);
    }
}
</script>

<style scoped>
.buttonS2 {
    box-shadow: 0px 9px 17px 0px #35AB3C3B;
}
</style>