<template>
    <div>
        <div class="mb-12">
            <h2 class="mb-2 font-bold text-lg">ورود/ثبت نام</h2>
            <p class=" text-gray-800">سلام عزیزم لطفا شماره مبایل خودتو وارد کن .</p>
        </div>
        <form @submit.prevent="" class="flex flex-col gap-2">
            <div class="relative p-1 border border-red-600 rounded-2xl">
                <label for="" class=" bg-white px-0.5 flex items-center absolute bottom-12 right-3">
                    <span class="transform translate-y-1 text-red-600"> * </span>
                    <span class=" text-gray-600">شماره تماس :</span>
                </label>
                <input name="mobile" v-model="phoneNumber" type="tel" class="w-full rounded-lg focus:outline-none px-1 py-3" placeholder="09331712156">
            </div>
            <span class="text-red-600 text-sm mb-8">{{ err }}</span>

            <button type="button" class="loginBtn mb-3" @click="validation()">ارسال کد</button>
            <div class="text-xs flex items-center py-5">
                <input v-model="termStatus" class="ml-3 accent-shelifeRed-200" type="checkbox">
                <span>شرایط و قوانین آزمایشگاه آنلاین <router-link to="/terms" class=" underline text-blue-600">شی لایف</router-link> را میپذیرم .</span>
            </div>
        </form>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {ref,computed} from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const props = defineProps(['displayNumber']);
const emit = defineEmits();
const goNext=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue+1,phoneNumber.value);
}

// validation
let err = ref('');
let termStatus = ref(false);
let phoneNumber = ref(null);
let digitsOfNumber = computed(()=>{
    return phoneNumber.value.toString().length;
})

const validation = ()=>{
    if(phoneNumber.value==null) {
       return err.value = 'لطفا کادر بالا را پر کنید';
    }else if(digitsOfNumber.value!==11) {
        console.log(digitsOfNumber.value)
       return err.value = 'شماره درست نیست';
    }else if(termStatus.value==false) {
        return err.value = 'لطفا با مقررات توافق کنید';
    }else {
        let mobileNumber=new FormData();
        mobileNumber.append("mobile",phoneNumber.value);
        store.dispatch("sendTokenRequest",mobileNumber);
        err.value = '';
        goNext();
    }
}
</script>