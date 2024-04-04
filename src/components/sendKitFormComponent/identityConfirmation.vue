<template>
    <section class="px-5 max-w-2xl mx-auto">

        <div class="flex flex-col gap-2 text-right mb-8">
            <h2 class="font-bold text-base">تایید شناسه کیت</h2>
            <p class="text-sm">شماره شناسه در داخل بسته بندی کیت است را در کادر زیر وارد کنید .</p>   
        </div>
        <form @submit.prevent="" class="flex flex-col items-start justify-center gap-6">
            <div class="w-full border-2 border-shelifeRed-100 rounded-xl px-3 py-3 flex items-center justify-start">
                <label for="" class="text-gray-400">کد ملی :</label>
                <input v-model="codeMeli" type="tel" class="w-4/6 text-gray-400 focus:outline-none">
            </div>

            <div class="w-full border-2 border-shelifeRed-100 rounded-xl px-3 py-3 flex items-center justify-start">
                <label for="" class="text-gray-400">شناسه :</label>
                <input v-model="identity" type="tel" class=" focus:outline-none text-gray-400">
            </div>
            <span class="text-sm text-red-500 mb-8">{{ err }}</span>
            <button @click="validation()" class="loginBtn w-full">تایید شناسه</button>
        </form>
    </section>
</template>

<script setup>
import {ref,computed} from 'vue'
const props = defineProps(['displayNumber'])
const emit = defineEmits();

const goNext=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue+1);
    emit('getIdentityInfo',codeMeli,identities)
}

// validation
let err = ref('');
let codeMeli = ref(null);
let digitsOfCodeMeli = computed(()=>{
    return codeMeli.value.toString().length;
})
let identity = ref(null);
const validation = ()=>{
    if(digitsOfCodeMeli.value!==10){
        return err.value ='کد ملی معتبر نیست';
    }else{
        err.value = '';
        goNext();
    }
}
</script>

<style scoped>
.l {
    color: #00acc1;
}
</style>