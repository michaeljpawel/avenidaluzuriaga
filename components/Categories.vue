<template>
    <section class="mb-3 max-w-[1220px] mx-auto">
        <h2>Explora las categorias</h2>
        <swiper-container :navigation="true" :loop="true" :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :slides-per-view="getCategoryCount" :spaceBetween="12">
            <swiper-slide v-for="category in categories" :key="category.id">
                <Category :category="category"></Category>
            </swiper-slide>

        </swiper-container>
    </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle';

register();

const categories = ref([
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
])

const getCategoryCount = computed(() => {
    return isXxl.value ? 10 : isXl.value ? 8 : isMd.value ? 6 : isSm.value ? 3 : 3;
});


</script>

<style></style>