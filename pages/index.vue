<template>
    <Categories></Categories>
    <Filter></Filter>
    <section class="max-w-[932px] mx-auto flex gap-3 justify-center">
        <div v-for="(column, index) in columns" class="gap-3 flex flex-col" :style="{ width: columnWidth }">
            <div v-for="ad in column">
                <Ad :ad="ad"></Ad>
            </div>
        </div>
    </section>
    <Modal v-model="show">
        hola
    </Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            // columns: 3,
            bg_colors: ['lime, green', 'esmerald', 'sky', 'teal', 'cyan', 'sky', 'fuchsia', 'rose', 'orange'],
            hex_colors: ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#8AC926', '#6A4C93', '#FFCA3A', '#1982C4'],
            ads: [
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina con mas de x años de experiencia y 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },

                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
                {
                    title: 'Se necesita cocinero',
                    content: 'Especializado en comida marina',
                    format: 'text',
                    contact: {
                        mobile_number: '924094526',
                        email: "email.com"
                    }

                },
            ],
            //numColumns: 3,
            show: true,
        }
    },

    mixins: [BreakpointMixin],

    computed: {

        columns() {
            const numColumns = this.numColumns;
            const initialColumns = Array.from({ length: numColumns }, () => []);

            const distributedAds = this.ads.reduce((columns, ad, index) => {
                const columnIndex = index % numColumns;
                columns[columnIndex].push(ad);
                return columns;
            }, initialColumns);

            return distributedAds;
        },

        columnWidth(): string {
            return this.isMd ? '300px' : this.isXs ? '400px' : '300px';
        },

        numColumns(): number {
            return this.isLg ? 3 : this.isMd ? 2 : 1;
        },
    },

    methods: {
        getRandomBg() {
            return this.hex_colors[Math.floor(Math.random() * this.hex_colors.length)];
        },
    },
});
</script>

<style scoped></style>