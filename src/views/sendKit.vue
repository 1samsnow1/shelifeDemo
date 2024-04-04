<template>
    <section class="animate-contentFade-in max-w-md mx-auto">
        <button @click="goBack()" class="w-full flex justify-start pt-5">
            <goBackIconVue/>
        </button>

        <div class="flex justify-center items-center mb-12">
            <shelifeIcon/>
        </div>

        <div v-if="fatherNumber==1">
            <identityConfirmation :displayNumber="fatherNumber" @getIdentityInfo="getIdentityInfo" @changeShowNumber="changeShowNumber"/>
        </div>

        <div v-if="fatherNumber==2">
            <chooseAddress :displayNumber="fatherNumber" @getAddressId="getAddressId" @changeShowNumber="changeShowNumber"/>
        </div>

        <div v-if="fatherNumber==3">
            <chooseTime :displayNumber="fatherNumber" @deliveryInfo="deliveryInfo" @changeShowNumber="changeShowNumber"/>
        </div>

        <div v-if="fatherNumber==4">
            <purchCompletionVue :deliveryDate="deliveryDate" :deliveryTime="deliveryTime" />
        </div>
    </section>
</template>

<script setup>
import shelifeIcon from '../components/shelifeIcon.vue';
import identityConfirmation from '../components/sendKitFormComponent/identityConfirmation.vue';
import chooseKit from '../components/sendKitComponent/chooseKit.vue';
import chooseAddress from '../components/sendKitComponent/chooseAddress.vue';
import chooseTime from '../components/sendKitComponent/chooseTime.vue';
import purchCompletionVue from '../components/sendKitComponent/purchCompletion.vue';
import goBackIconVue from '../components/Icons/goBackIcon.vue';
import {useRouter} from 'vue-router';
import { ref } from 'vue';
let fatherNumber = ref(1);


// showNumber is the stage that user is in
const changeShowNumber = (newValue) =>{
    fatherNumber.value = newValue;
}
//kit or user identity
let codeMeli = ref(null);
let shenaseKit = ref(null);
const getIdentityInfo = (nationalCode,kitIdentity)=>{
    codeMeli.value = nationalCode;
    shenaseKit.value = kitIdentity;
}
//chosen kit to send
let kitInfo = ref(null);
const getKitInfo = (info)=>{
    kitInfo.value = info;
}
//kit delivery Address
let addressId = ref(null);
const getAddressId = (id)=>{ 
    addressId.value = id;
}
//delveryinfo time and date
let deliveryDate = ref('');
let deliveryTime = ref('');
const deliveryInfo = (newDate,newTime) => {
    deliveryDate.value = newDate;
    deliveryTime.value = newTime;
}
const router = useRouter();
const goBack = ()=>{
    router.go(-1);
};

</script>