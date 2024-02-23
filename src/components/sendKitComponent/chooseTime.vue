<template>
    <section class="">
        <form @submit.prevent="" action="">
            <h2 class="font-bold text-lg mb-4">زمان ارسال کیت را مشخص کنید .</h2>
            <div class="flex justify-start items-center gap-2">
                <label for="">روز :</label>
                <input type="text" class="custom-input text-gray-500">
            </div>
            <div class="w-full flex justify-center mt-20">
                <date-picker v-model="date"
                custom-input=".custom-input"
                range color="#FF4F6266" inline></date-picker>
            </div>

            <div class="mt-10">
                <div class="flex justify-start items-center gap-2 mb-5">
                    <label for="">ساعت :</label>
                    <span class=" text-shelifeGray">{{ theTime }}</span>
            </div>
                <div class="grid grid-cols-3 gap-4">
                    <button v-for="t in times" @click="timeHandler(t)" class=" w-24 py-3 rounded-2xl text-center timeButtonShadow" :class="{'active':theTime==t}">{{ t }}</button>
                </div>
            </div>

            <button type="button" @click="goNext()" class="w-full mt-8 loginBtn mb-5">مرحله بعد</button>
            <button type="button" @click="goBack()" class="w-full bg-green-400 text-white rounded-xl shadow-inner py-3.5 px-20 buttonS mb-10">مرحله قبل</button>
        </form>
        
    </section>
</template>
   
<script setup>
import DatePicker from 'vue3-persian-datetime-picker'
import {ref, onMounted} from 'vue';
let date = ref('');

let times = ['8 تا 12','10 تا 12','12 تا 14','14 تا 16'];
let theTime = ref('');
const timeHandler=(chosenTime)=>{
    theTime.value= chosenTime;
}

const props = defineProps(['displayNumber'])
const emit = defineEmits();
const goNext=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue+1);
}
const goBack=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue-1);
}
</script>
<style>
.timeButtonShadow {
    box-shadow: 0px 4px 18px 0px #0000001F;
}
.active {
    border: 1px solid #F99898;
    background-color: #ffeded;
    box-shadow: 0px 9px 17px 0px rgba(248, 111, 111, 0.26);

}
</style>