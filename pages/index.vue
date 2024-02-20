<template>
    <Categories></Categories>
    <Filter></Filter>
    <section class="max-w-[932px] mx-auto flex gap-3 justify-center">
        <div v-for="(column, index) in columns" class="gap-3 flex flex-col" :style="{ width: columnWidth }">
            <div v-for="ad in column">
                <Ad class="cursor-pointer" :ad="ad" @click="onSelectedAd(ad)"></Ad>
            </div>
        </div>
    </section>
    <Modal v-model="show_ad">
        <Ad :ad="selected_ad" :showContact="true"></Ad>
    </Modal>

    <div>
        {{ isMd }}
    </div>
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';

const ads = ref([]);
const columns = ref([]);

const selected_ad = ref({});
const show_ad = ref(false);

const onSelectedAd = (ad) => {
    selected_ad.value = ad;
    show_ad.value = true;
};

const initColums = () => {
    const numColumns = isLg.value ? 3 : isMd.value ? 2 : 1;
    const initialColumns = Array.from({ length: numColumns }, () => []);
    const distributedAds = ads.value.reduce((columns, ad, index) => {
        const columnIndex = index % numColumns;
        ad.bg = ad.bg || randomItem(hexColors);
        columns[columnIndex].push(ad);
        return columns;
    }, initialColumns);
    return distributedAds;
};

// const columns = computed(() => {
//     const numColumns = isLg.value ? 3 : isMd.value ? 2 : 1;
//     const initialColumns = Array.from({ length: numColumns }, () => []);
//     const distributedAds = ads.value.reduce((columns, ad, index) => {
//         const columnIndex = index % numColumns;
//         ad.bg = ad.bg || randomItem(hexColors);
//         columns[columnIndex].push(ad);
//         return columns;
//     }, initialColumns);
//     return distributedAds;
// });

const hexColors = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#8AC926', '#6A4C93', '#FFCA3A', '#1982C4'];
const randomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

const columnWidth = computed(() => {
    return isMd.value ? '300px' : isSm.value ? '400px' : '300px';
});


onMounted(async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const records = await pb.collection('ads').getFullList({
        sort: '-created',
    });

    console.log(records);

    ads.value = records;

    columns.value = initColums();
});

</script>

<style scoped></style>