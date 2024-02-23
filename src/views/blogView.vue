<template>
    <section class="animate-contentFade-in max-w-3xl mx-auto">
        <section class="p-8">
            <homeHeader/>
        </section>

        <div class=" border-b-2">
            <h2 class="w-20 border-b-2 border-buttonColor transform -translate-x-8 text-center text-sm">خدمات</h2>
        </div>  

        <!--blog content-->
        <section class="w-full md:flex flex-col items-start justify-center">
            <h2 class="w-4/5 hidden text-xl text-right mt-10 font-bold px-3 sm:block">آموزش ها</h2>
            <div class="flex flex-col justify-center gap-4 items-center my-7 px-3 md:items-center">
                <p class="text-sm text-right leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>

                <img class="w-full" src="@/assets/image/blogPic1.png" alt="blogPicture">

                <p class="text-sm text-right leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <img class="w-full" src="@/assets/image/blogPic2.png" alt="blogPicture">
            </div>
        </section>
    </section>
</template>

<script setup>
import homeHeader from '../components/homeComponent/homeHeader.vue';
</script>