<template>
    <section class="mb-3 max-w-[1220px] mx-auto">
        <h2>Explora las categorias</h2>
        <swiper :freeMode="false" :loop="true" :modules="modules" :navigation="true" :slideToClickedSlide="false"
            :autoplay="{ delay: 10000, disableOnInteraction: false }" :slidesPerView="getCategoryCount" :spaceBetween="12"
            :watchSlidesProgress="true" class="mySwiper">

            <swiper-slide v-for="category in categories" :key="category.id">
                <Category :category="category"></Category>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vibrant from 'node-vibrant';
import { Controller, FreeMode, Navigation, Thumbs, Zoom, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default defineComponent({

    components: {
        Swiper,
        SwiperSlide,
    },

    mixins: [BreakpointMixin],

    data() {
        return {
            categories: [
                {
                    name: 'mecanica',
                    id: 1,
                    icon: 'mdi:tools',
                    count: 64,
                    img: '1.jpg'
                },
                {
                    name: 'hogar',
                    id: 2,
                    icon: 'solar:home-bold',
                    count: 7688,
                    img: '2.jpg'
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 645,
                    img: '3.jpg'
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 754,
                    img: '4.jpg'
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 456,
                    img: '5.jpg'
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 45,
                    img: '6.jpg'
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 7976,
                    img: '7.jpg'
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 345,
                    img: '8.jpg'
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 756,
                    img: '9.jpg'
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 564,
                    img: '10.jpg'
                }
            ],
            modules: [Zoom, FreeMode, Navigation, Controller, Thumbs, Autoplay],
        }
    },

    computed: {
        getCategoryCount() {
            return this.isXxl ? 10 : this.isXl ? 8 : this.isMd ? 6 : this.isSm ? 3 : 3;
        },
    }



})


</script>

<style></style>