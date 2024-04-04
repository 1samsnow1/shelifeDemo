<template>
    <section class="animate-contentFade-in max-w-2xl mx-auto">
        <button @click="goBack()" class="w-full flex justify-start p-5">
            <goBackIcon/>
        </button>
        <div class="flex justify-center items-center mb-10 p-5">
            <shelifeIcon/>
        </div>

        <div v-if="fatherNumber==1">
            <chooseKit :displayNumber="fatherNumber" @getKitInfo="getKitInfo" @changeShowNumber="changeShowNumber"/>
        </div>

        <div v-if="fatherNumber==2">
            <chooseAddress :displayNumber="fatherNumber" @getAddressId="getAddressId" @changeShowNumber="changeShowNumber"/>
        </div>

        <div v-if="fatherNumber==3">
            <amountOfKit :displayNumber="fatherNumber" @getAmountOfKit="getAmountOfKit" @changeShowNumber="changeShowNumber"/>
        </div>
        
        <div v-if="fatherNumber==4">
            <chooseTime :displayNumber="displayNumber" @deliveryInfo="deliveryInfo" @changeShowNumber="changeShowNumber"/>
        </div>

        <div v-if="fatherNumber==4">
            <reqKitPurchComplete :price="kitPrice" :amount="amountOfKit"/>
        </div>
    </section>
</template>

<script setup>
import shelifeIcon from '../components/shelifeIcon.vue';
import chooseKit from '../components/sendKitComponent/chooseKit.vue';
import chooseAddress from '../components/sendKitComponent/chooseAddress.vue';
import amountOfKit from '../components/sendKitComponent/amountOfKit.vue';
import chooseTime from '../components/sendKitComponent/chooseTime.vue';
import goBackIcon from '../components/Icons/goBackIcon.vue';
import reqKitPurchComplete from '../components/sendKitComponent/reqKitPurchComplete.vue';
import {ref,onMounted} from 'vue';
import {useRouter} from 'vue-router';
import { getCookie } from '../assets/cooki';
let fatherNumber = ref(2);
const changeShowNumber = (newValue) =>{
    fatherNumber.value = newValue;
}
const router = useRouter();
const goBack = ()=>{
    router.go(-1);
};

let kitId = ref(null);
let kitPrice = ref(null);
const getKitInfo = (id,price)=>{
    kitId.value = id;
    kitPrice.value = price
}

let addressId = ref(null);
const getAddressId = (id)=>{
    addressId.value = id;
}

let amountOfKit = ref(null);
const getAmountOfKit = (number)=>{
    amountOfKit.value = number;
}

let deliveryDate = ref('');
let deliveryTime = ref('');
const deliveryInfo = (newDate,newTime) => {
    deliveryDate.value = newDate;
    deliveryTime.value = newTime;
}

onMounted(()=>{
    // if(!getCookie("token")){
    //     alert("لطفا ابتدا وارد شوید");
    //     router.push("/home")
    // }
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