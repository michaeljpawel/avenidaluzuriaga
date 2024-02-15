<template>
    <Card class="overflow-hidden" :style="{ backgroundColor: backgroundColor, color: textColor }">
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
        }
    },

    computed: {
        backgroundColor() {
            let colors = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];

            function randomIntFromInterval(min, max) {
                // min and max included
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            return colors[randomIntFromInterval(0, colors.length - 1)];
        },

        softBg() {
            const hexColor = this.backgroundColor.replace('#', '');
            const r = parseInt(hexColor.substring(0, 2), 16);
            const g = parseInt(hexColor.substring(2, 4), 16);
            const b = parseInt(hexColor.substring(4, 6), 16);

            // Calcula un color de fondo más suave
            const softR = Math.floor((255 + r) / 2);
            const softG = Math.floor((255 + g) / 2);
            const softB = Math.floor((255 + b) / 2);

            return `rgb(${softR}, ${softG}, ${softB})`;
        },

        strongBg() {
            const hexColor = this.backgroundColor.replace('#', '');

            const r = parseInt(hexColor.substring(0, 2), 16);
            const g = parseInt(hexColor.substring(2, 4), 16);
            const b = parseInt(hexColor.substring(4, 6), 16);

            // Calcula un color de fondo más intenso
            const intenseR = Math.min(255, r * 1.5);
            const intenseG = Math.min(255, g * 1.5);
            const intenseB = Math.min(255, b * 1.5);

            return `rgb(${intenseR}, ${intenseG}, ${intenseB})`;
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