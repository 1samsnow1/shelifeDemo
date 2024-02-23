<template>
    <section class="p-6 flex flex-col items-center gap-10">
        <div class="w-full text-right">
            <h2 class="mb-2 font-bold">تعداد سفارش</h2>
            <p class="text-sm">تعداد کیت مورد نظر خود را وارد کنید</p>
        </div>

        <div class="flex justify-between items-center w-60 py-2 border border-shelifeRed-100 rounded">
            <button @click="amount++" class="px-3 border-l border-shelifeRed-100">+</button>
            <span class=" text-shelifeRed-100">{{ amount }}</span>
            <button @click="amount--" class="px-3 border-r border-shelifeRed-100">-</button>
        </div>

        <button class="w-full loginBtn">تایید</button>
        <button type="button" @click="goBack()" class="w-full bg-green-400 text-white rounded-xl shadow-inner py-3.5 px-20 buttonS">مرحله قبل</button>
    </section>
</template>

<script setup>
import {ref} from 'vue'
let amount= ref(1);
let props = defineProps(['displayNumber']);
const emit = defineEmits();
const goBack=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue-1);
}
</script>