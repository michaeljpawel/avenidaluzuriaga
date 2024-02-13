<template>
    <section class="mb-3">
        <swiper :freeMode="false" :loop="true" :modules="modules" :navigation="true" :slideToClickedSlide="false"
            :autoplay="{ delay: 10000, disableOnInteraction: false }" :slidesPerView="getCategoryCount" :spaceBetween="12"
            :watchSlidesProgress="true" class="mySwiper">

            <swiper-slide v-for="category in categories" :key="category.id">
                <Card>
                    <div class="h-[114px] flex flex-col justify-center items-center">
                        <div class="h-[65%] flex items-center">
                            <Icon :name="category.icon" size="36px" color="blue" />
                        </div>
                        <div class="h-[35%] flex flex-col">
                            <span>{{ category.name }}</span>
                            <span>{{ category.count }}</span>

                        </div>
                    </div>
                </Card>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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

    setup() {
        const isSm = sm();
        const isMd = md();
        const isLg = lg();
        const isXl = xl();
        const isXxl = xxl();
        const isXxxl = xxxl();

        return {
            isSm,
            isMd,
            isLg,
            isXl,
            isXxl,
            isXxxl
        };
    },

    data() {
        return {
            categories: [
                {
                    name: 'mecanica',
                    id: 1,
                    icon: 'mdi:tools',
                    count: 64,
                },
                {
                    name: 'hogar',
                    id: 2,
                    icon: 'solar:home-bold',
                    count: 7688,
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 645,
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 754,
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 456,
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 45,
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 7976,
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 345,
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 756,
                },
                {
                    name: 'mecanica',
                    id: 3,
                    icon: 'tabler:tools-kitchen-2',
                    count: 564,
                }
            ],
            modules: [Zoom, FreeMode, Navigation, Controller, Thumbs, Autoplay],
        }
    },

    computed: {
        getCategoryCount() {
            return this.isXxl ? 10 : this.isXl ? 8 : this.isMd ? 7 : this.isSm ? 4 : 4;
        },
    }



})


</script>

<style></style>