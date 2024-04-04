<template>
    <section>
        <span>
            کاربر عزیز شما به تعداد
            <b>{{ props.amount }}عدد</b>
            کیت آزمایشگاهی خریداری کردید
        </span>
        
        <span>
            مبلق قابل پرداخت : <b>{{ props.price }}تومان</b>
        </span>

        <button class="loginBtn"><a href="" class=" text-white">پرداخت</a></button>
    </section>
</template>

<script setup>
const props = defineProps(['price','amount'])
</script>