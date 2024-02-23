<template>

  <section class=" animate-contentFade-in">
    <!-- header -->
    <section class="p-8">
      <homeHeader/>
    </section>
    
    <div class=" border-b-2">
      <h2 class="w-20 border-b-2 border-buttonColor transform -translate-x-8 text-center text-sm">خدمات</h2>
    </div>  
    <!-- main section -->
    <section class="w-full px-6 grid grid-cols-1 gap-8 my-10 lg:w-4/5 lg:mx-auto">
      <!--cards-->
      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <homeCard v-for="item in cardInfo" :key="item" :cardInfo="item"/>
      </section>

      <banner/>
      <!--educations-->

      <h2 class="w-full text-right text-2xl font-bold transform -translate-x-2">آموزش ها</h2>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <educationCard v-for="i in 2" :key="i"/>
      </section>

    </section>
    <!--footer-->
    <homeFooter/>
  </section>
  
</template>

<script setup>
import homeHeader from '../components/homeComponent/homeHeader.vue';
import homeCard from '../components/homeComponent/homeCard.vue';
import banner from '../components/homeComponent/banner.vue';
import educationCard from '../components/homeComponent/educationCard.vue';
import homeFooter from '../components/homeComponent/homeFooter.vue';


const cardInfo = [
  {title:'درخواست کیت',desc:'ثبت سفارش کیت آزمایشگاهی',link:'/requestKit'},
  {title:'ارسال نمونه',desc:'ارسال نمونه به آزمایشگاه باکتوژن',link:'/sendKit'},
  {title:'وبلاگ',desc:'مقالات و مطالب آموزشی',link:'/blogList'},
  {title:'مشاوره',desc:'درخواست مشاوره با متخصصین تیم ما',link:'/consultationForm'}
]
</script>