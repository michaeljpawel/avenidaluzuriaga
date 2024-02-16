<template>
    <Card class="overflow-hidden">
        <div class="flex flex-col h-[130px] relative justify-end" :style="{ backgroundImage: `url('${category.img}')` }">
            <div class="flex flex-col justify-center items-center p-3 text-white"
                :style="{ backgroundColor: `rgb(${vibrantColor.join(', ')})` }">
                <div class="font-medium">{{ category.name }}</div>
                <div class=" text-[11px] text-center">{{ category.count }} anuncios</div>
            </div>
        </div>
    </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vibrant from 'node-vibrant';
import ColorThief from 'colorthief';

export default defineComponent({
    props: {
        category: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            vibrantColor: [],
        };
    },


    mounted() {

        this.$nextTick(() => {
            const colorThief = new ColorThief();
            const img = new Image();

            img.src = this.category.img;

            if (img.complete) {
                this.vibrantColor = colorThief.getColor(img);
            } else {
                const self = this;
                img.addEventListener('load', function () {
                    self.vibrantColor = colorThief.getColor(img);
                });
            }

            console.log(this.vibrantColor)
        });
    },
})


</script>

<style></style>