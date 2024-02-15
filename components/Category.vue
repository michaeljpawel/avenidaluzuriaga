<template>
    <Card class="overflow-hidden">
        <div class="flex flex-col h-[130px] relative justify-end bg-[url('https://picsum.photos/200/300')]">
            <div class="flex flex-col justify-center items-center p-3 bg-gray-100">
                <div class="font-medium">{{ category.name }}</div>
                <div class=" text-[11px] text-center">{{ category.count }} anuncios</div>
            </div>
        </div>
    </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vibrant from 'node-vibrant';

export default defineComponent({
    props: {
        category: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            vibrantColor: '',
        };
    },

    methods: {
        getPalette(img) {
            const vibrant = new Vibrant(img);

            vibrant.getPalette().then(
                (palette) => console.log('palete', palette),
                (reason) => {
                    console.error(reason);
                }
            )
        },


    },
    mounted() {

        const img = this.$refs.mm;
        console.log(img);
        this.getPalette(img);
    },
})


</script>

<style></style>