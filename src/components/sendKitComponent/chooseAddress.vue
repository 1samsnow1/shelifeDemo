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

                <input v-model="postal_code" placeholder="کد پستی :" type="text" class="w-full border border-shelifeRed-200 p-2">

                <div>
                    <select name="state">
                        <option v-for="state in stateAreas" value="state.name" @click="selectState(state.id)">{{ state.name }}</option>
                    </select>

                    <select v-if="cityAreas" name="city">
                        <option v-for="city in cityAreas.cities" @click="selectCity(city.id)" value="city.name">{{ city.name }}</option>
                    </select>
                </div>

                <button @click="addAddress()" class="w-full loginBtn mb-5">افزودن آدرس</button>
            </div>

            <!-- addresses -->
            <div class="flex justify-start items-center gap-4 w-full p-3 border-2 border-shelifeRed-100 rounded-xl mb-5" v-if="!showForm" v-for="item in addresses" :key="item">

                <div v-if="addresses" class="w-5 h-5 checkBoxBorder overflow-hidden flex items-center       justify-center">

                    <input v-for="item in addresses" v-model="checkedStatus" :value="item.id" :checked="selectedOption == item.id" @click="toggleCheckbox(item.id)"  type="checkbox" class="transform scale-150 w-8 h-8 accent-shelifeRed-100">
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
import {ref,computed,onMounted} from 'vue'
import { useStore } from 'vuex';
const store = useStore();

// adresses checkbox
let userInfo = computed(()=>{
    return store.getters.getUserProfile;
})
let addresses = computed(()=>{
   return store.getters.getUserAddress;
})

let stateAreas = computed(()=>{
    return store.getters.areas;
})

let stateId = ref(null);
let cityId = ref(null);
let cityAreas = ref(null);

const selectState = (chosenId)=>{
    stateId.value = chosenId;
    cityAreas.value = stateAreas.find(({id})=> id == chosenId)
    console.log(cityAreas.value);
}
const selectCity = (id)=>{
    cityId.value = id;
}
let location = ref('');
let postal_code = ref(null);

let chooseAddressWarning = ref('')
const selectedOption = ref('');
const checkedStatus = ref(false);

const toggleCheckbox = (option) => {
  selectedOption.value = option;
};
console.log(selectedOption.value)


const addAddress = ()=>{
    let addressFrom = new FormData();
    addressFrom.append("address",location.value)
    addressFrom.append("postal_code",location.value)
    addressFrom.append("first_name",userInfo.first_name)
    addressFrom.append("last_name",userInfo.last_name)
    addressFrom.append("mobile",userInfo.mobile)
    addressFrom.append("city",cityId.value)
    addressFrom.append("state",stateId.value)
    store.dispatch("addUserAddress",addressFrom)
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
    // validation
    if(!checkedStatus.value){
        return chooseAddressWarning.value = 'لطفا آدرس خود را انتخاب کنید'
    }else{
        chooseAddressWarning.value = '';
        let newValue = props.displayNumber;
        emit('changeShowNumber',newValue+1);
        emit('getAddressId',selectedOption.value);
    }
    
}
const goBack=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue-1);
}

onMounted(()=>{
    store.dispatch("getUserAddressFromServer");
    store.dispatch("getAddressAreasFromServer")
})
</script>

<style scoped>
.checkBoxBorder {
    border: 3px solid #FF4F63;
    border-radius: 1.96px;
}
</style>