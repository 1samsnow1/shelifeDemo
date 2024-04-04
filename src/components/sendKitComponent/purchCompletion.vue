<template>
    <section>
        <div class="flex mb-4">
            <span>کاربر عزیز پیک در تاریخ</span>
            <span>{{ props.deliveryDate }}</span>
            <span>بین ساعت</span>
            <span>{{ deliveryTime }}</span>
            <span>به آدرس ذکر شده برای تحلیل نمونه مراجعه میکنند</span>
        </div>

        <button type="button" @click="verify()" class="w-full loginBtn mb-5">تایید</button>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

let props = defineProps(['deliveryDate','deliveryTime'])
const router = useRouter();
const verify = ()=>{
    router.pushScopeId('/home');
}
</script>