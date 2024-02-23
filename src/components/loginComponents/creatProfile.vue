<template>
    <div class="w-80">
        <h2 class="mb-12 font-bold text-lg">ساخت پروفایل کاربری</h2>
        <form @submit.prevent="" class="w-full flex flex-col gap-6">
            <div class="w-full relative p-2 border border-shelifeRed-50 rounded-2xl">
                <label for="" class="text-gray-600 absolute bg-white px-0.5 bottom-10 right-3">*نام و نام خانوادگی :</label>
                <input v-model="userName" type="text" class=" focus:outline-none py-1 px-1" placeholder="محمد">
            </div>
            <div class="w-full relative p-2 border border-shelifeRed-50 rounded-2xl">
                <label for="" class="text-gray-600 absolute bg-white px-0.5 bottom-10 right-3">*کد ملی :</label>
                <input v-model="codeMeli" type="tel" class=" focus:outline-none py-1 px-1" placeholder="کد ملی">
            </div>
            <div class="w-full relative p-2 border border-shelifeRed-50 rounded-2xl">
                <label for="" class=" text-gray-600 absolute bg-white px-0.5 bottom-9 right-3">تاریخ تولد :</label>
                <date-picker v-model="date" color="#FF4F6266"></date-picker>
            </div>
            <span class=" text-red-500">{{ err }}</span>
            <button type="button" class="loginBtn" @click="validation()">تایید</button>
        </form>
    </div>
</template>

<script setup>
import DatePicker from 'vue3-persian-datetime-picker'
import { useRouter } from 'vue-router';
import {setCookie} from '@/assets/cooki.js';
import {ref,computed} from 'vue';
let date = ref('');
const Router = useRouter(); 
const props = defineProps(['displayNumber','tellNumber']);
const emit = defineEmits();
const goNext =()=>{
    console.log(props.tellNumber.value);
    setCookie('phoneNumber',props.tellNumber.value,30,'/');
    setCookie('userName',userName.value,30,'/');
    setCookie('codeMeli',codeMeli.value,30,'/');
    Router.push('/home')
}

// validation
let err = ref('')
let userName = ref('');
let codeMeli = ref(null);
let digitsOfNumber = computed(()=>{
            return codeMeli.value.toString().length;
        })
const validation= ()=>{
    if(userName.value==''){
        return err.value = 'لطفا نام خود را انتخاب کنید';
    }else if(codeMeli.value==null){
        return err.value = 'لطفا کد ملی را وارد کنید';
    }else if(digitsOfNumber.value!==10) {
        return err.value = 'کد ملی اشتباه است'
    }else {
        goNext();
    }
}
</script>

<style scoped>
</style>