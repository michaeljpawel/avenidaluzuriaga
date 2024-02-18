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
        <Ad :ad="selected_ad"></Ad>
    </Modal>

    <div>
        {{ isMd }}
    </div>
</template>

<script setup lang="ts">

const ads = ref([
    {
        title: '1',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '2',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '3',
        content: 'Especializado en comida marina con mas de x años de experiencia y 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },

    {
        title: '4',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '5',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '6',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '7',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '8',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '9',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '10',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
    {
        title: '11',
        content: 'Especializado en comida marina',
        format: 'text',
        contact: {
            mobile_number: '924094526',
            email: "email.com"
        }

    },
]);

const selected_ad = ref({});
const show_ad = ref(false);

const onSelectedAd = (ad) => {
    selected_ad.value = ad;
    show_ad.value = true;
};

const columns = computed(() => {
    const numColumns = isLg.value ? 3 : isMd.value ? 2 : 1;
    const initialColumns = Array.from({ length: numColumns }, () => []);
    const distributedAds = ads.value.reduce((columns, ad, index) => {
        const columnIndex = index % numColumns;
        columns[columnIndex].push(ad);
        return columns;
    }, initialColumns);
    return distributedAds;
});

const columnWidth = computed(() => {
    return isMd.value ? '300px' : isSm.value ? '400px' : '300px';
});


</script>

<style scoped></style>