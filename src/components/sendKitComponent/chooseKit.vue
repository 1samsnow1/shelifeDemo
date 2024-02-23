<template>
    <section class="text-right px-4 flex flex-col gap-8">
        <h2 class="font-bold text-base">لطفا کیت مورد نظر خود را انتخاب کنید</h2>

        <form @submit.prevent="" action="">
            <div class="max-h-80 overflow-scroll">
                <div v-for="item in kits" :key="item" class="flex justify-between items-center p-3 border border-shelifeRed-100 rounded-2xl mb-3">
                <!-- kit info -->
                <div class="flex justify-center items-center gap-2">
                    <input :value="item.num" :checked="selectedOptions.includes(item.num)" @click="toggleCheckbox(item.num)" type="checkbox" class="w-4 h-4 accent-shelifeRed-200">
                    <figure class="w-8 h-8 border border-transparent rounded-full bg-gray-300">
                        <!--image-->
                    </figure>
                    <span class=" text-sm">کیت hpv</span>
                </div>

                <!-- kit price -->
                <div class="text-sm">
                    قیمت:
                    <span>{{ item.price }}</span>
                </div>

                </div>
            </div>

            <button type="button" @click="goNext()" class="w-full mt-8 loginBtn mb-10">مرحله بعد</button>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['displayNumber'])
const emit = defineEmits();
const goNext=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue+1);
}

let kits = [
    {price: 3142150,num:1},
    {price: 3142150,num:2},
    {price: 3142150,num:3},
    {price: 3142150,num:4},
    {price: 3142150,num:5},
]
const selectedOptions = ref([]);
const toggleCheckbox = (option) => {
  selectedOptions.value = [option];
};
</script>