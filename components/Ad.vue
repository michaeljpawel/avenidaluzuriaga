<template>
    <Card v-if="ad" class="overflow-hidden" :style="{ backgroundColor: backgroundColor, color: textColor }">
        <div class="p-3">
            <div class="font-bold text-center">{{ ad.title }}</div>
            <div class="text-center">{{ ad.content }}</div>
        </div>
        <div class="ad-meta text-white" style="background-color: rgba(0, 0, 0, 0.2) ">
            <div class="flex justify-between p-1">
                <div>
                    <Icon name="mdi:eye"></Icon>
                    <span>353k</span>
                </div>
                <div>
                    <Icon name="mdi:location"></Icon>
                    <span>Centenario, Huaraz</span>
                </div>
            </div>
        </div>
    </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        ad: {
            type: Object,
            required: true,
        },

        bg: String,

    },

    data() {

        return {
            hex_bg: ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#8AC926', '#6A4C93', '#FFCA3A', '#1982C4'],
        }
    },

    computed: {
        backgroundColor() {
            const colors = this.hex_bg;

            function randomIntFromInterval(min, max) {
                // min and max included
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            return this.bg || colors[randomIntFromInterval(0, colors.length - 1)];
        },

        textColor() {
            // Calcula el contraste del color de fondo
            const hexColor = this.backgroundColor.replace('#', '');
            const r = parseInt(hexColor.substring(0, 2), 16);
            const g = parseInt(hexColor.substring(2, 4), 16);
            const b = parseInt(hexColor.substring(4, 6), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;

            // Establece el color del texto en blanco o negro dependiendo del contraste
            return brightness > 125 ? '#000000' : '#FFFFFF';
        },


    }
});

</script>

<style></style>