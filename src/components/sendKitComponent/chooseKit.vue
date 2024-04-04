<template>
    <section class="text-right px-4 flex flex-col gap-8">
        <h2 class="font-bold text-base">لطفا کیت مورد نظر خود را انتخاب کنید</h2>

        <form @submit.prevent="" action="">

            <div class="max-h-80 overflow-scroll">
                
                <loader v-if="!kits"/>

                <div v-else v-for="item in kits" :key="item" class="flex justify-between items-center p-3 border border-shelifeRed-100 rounded-2xl mb-3">

                <!-- kit info -->
                <div class="flex justify-center items-center gap-2">

                    <input :value="item.id" :checked="selectedOptions.includes(item.id)" @click="toggleCheckbox(item.id),selectKit(item.price,item.id)" type="checkbox" class="w-4 h-4 accent-shelifeRed-200">

                    <figure class="w-8 h-8 border border-transparent rounded-full bg-gray-300">
                        <img :src="item.media_showcase.main_image.original_url"/>
                    </figure>
                    <span class=" text-sm">{{ item.title }}</span>
                </div>

                <!-- kit price -->
                <div class="text-sm">
                    قیمت:
                    <span>{{ item.price }}</span>
                </div>

                </div>

            </div>
            <div>{{ err }}</div>
            <button type="button" @click="goNext()" class="w-full mt-8 loginBtn mb-10">مرحله بعد</button>
        </form>
    </section>
</template>

<script setup>
import { ref,computed,onMounted } from 'vue';
import { useStore } from 'vuex';
import loader from '../Icons/loader.vue';
const props = defineProps(['displayNumber'])
const emit = defineEmits();
const store = useStore();

const goNext=()=>{
    let newValue = props.displayNumber;
    emit('changeShowNumber',newValue+1);
    emit('getKitInfo',selectedKitId.value,selectedKitPrice.value)
}

let selectedKitId = ref(null);
let selectedKitPrice = ref(null);
const selectKit = (selected)=>{
    selectedKitId.value = selected;
}
let kits = computed(()=>{
    return store.getters.getProductKitsList
})
const selectedOptions = ref([]);
const toggleCheckbox = (option) => {
  selectedOptions.value = [option];
};

let err = ref('')
const validation = ()=>{
    if(selectedOptions.value == null){
        err.value = 'لطفا یک کیت انتخاب کنید'
    }else{
        err.value = '';
        goNext();
    }
}

onMounted(()=>{
    store.dispatch("getProductKitsFromServer");
})
</script>