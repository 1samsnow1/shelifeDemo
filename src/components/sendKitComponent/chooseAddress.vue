<template>
    <section class=" text-right px-4 flex flex-col gap-8">
        <h2 class="font-bold text-base">آدرس ها اطلاعات تحویل</h2>
         <form @submit.prevent="" action="">
            <button v-if="!showForm" @click="toggleForm()" class=" text-center w-full p-3 border-2 border-shelifeRed-100 rounded-xl mb-5">
                آدرس جدید +
            </button>
            <!-- adding address form -->
            <div v-if="showForm" class="w-full flex flex-col gap-2 ">
                <input v-model="location" placeholder="آدرس:" type="text" class="w-full border border-shelifeRed-200 p-2">
                <button @click="addAddress()" class="w-full loginBtn mb-5">افزودن آدرس</button>
            </div>
            <!-- addresses -->
            <div class="flex justify-start items-center gap-4 w-full p-3 border-2 border-shelifeRed-100 rounded-xl mb-5" v-if="!showForm" v-for="item in addresses" :key="item">
                <div class="w-5 h-5 checkBoxBorder overflow-hidden flex items-center justify-center">
                    <input v-model="checkedStatus" :value="item.address" :checked="selectedOption == item.address" @click="toggleCheckbox(item.address)"  type="checkbox" class="transform scale-150 w-8 h-8 accent-shelifeRed-100">
                </div>
                <span>{{ item.address }}</span>
            </div>
             <span>{{ chooseAddressWarning }}</span>
            <button type="button" @click="goNext()" class="w-full loginBtn mb-5">مرحله بعد</button>
            <button type="button" @click="goBack()" class="w-full bg-green-400 text-white rounded-xl shadow-inner py-3.5 px-20 buttonS">مرحله قبل</button>
         </form>
    </section>
</template>

<script setup>
import {ref,computed} from 'vue'

let location = ref('');
let codePosti = ref();
let plak = ref('')
// adresses checkbox
let addresses = [
    {address:'گلستان گرگان ویلاشهر 14'},
    {address:'مریم اباد مریم 16'}
];

let chooseAddressWarning = ref('')
const selectedOption = ref('');
const checkedStatus = ref(false);
const toggleCheckbox = (option) => {
  selectedOption.value = option;
};
console.log(selectedOption.value)


const addAddress = ()=>{
    let newAddress = {address: location,codePosti:codePosti,plak:plak};
    addresses.push(newAddress);
    showForm.value = !showForm.value;
}

// show form button
let showForm = ref(false);
const toggleForm = ()=>{
    showForm.value = !showForm.value;
}

//next stage
const props = defineProps(['displayNumber'])
const emit = defineEmits();
const goNext=()=>{
    if(!checkedStatus.value){
        return chooseAddressWarning.value = 'لطفا آدرس خود را انتخاب کنید'
    }else{
        chooseAddressWarning.value = '';
        let newValue = props.displayNumber;
        emit('changeShowNumber',newValue+1);
    }
    
}
const goBack=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue-1);
}
</script>

<style scoped>
.checkBoxBorder {
    border: 3px solid #FF4F63;
    border-radius: 1.96px;
}
</style>