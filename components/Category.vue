<template>
    <Card class="overflow-hidden">
        <div class="flex flex-col h-[130px] relative justify-end" :style="{ backgroundImage: `url('${category.img}')` }">
            <div class="flex flex-col justify-center items-center p-3 text-white"
                :style="{ backgroundColor: `rgb(${vibrantColor.join(', ')})` }">
                <div class="font-medium">{{ category.name }}</div>
                <div class="text-[11px] text-center">{{ category.count }} anuncios</div>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import ColorThief from 'colorthief';

const props = defineProps({
    category: {
        type: Object,
        required: true,
    },
});

const vibrantColor = ref([]);

onMounted(() => {

    nextTick(() => {
        const colorThief = new ColorThief();
        const img = new Image();

        img.src = props.category.img;

        if (img.complete) {
            vibrantColor.value = colorThief.getColor(img);
        } else {
            img.addEventListener('load', () => {
                vibrantColor.value = colorThief.getColor(img);
            });
        }
    });
});
</script>

<style></style>
