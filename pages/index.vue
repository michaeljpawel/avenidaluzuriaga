<template>
    <Categories></Categories>
    <Filter></Filter>
    <section class="max-w-[932px] mx-auto grid grid-cols-3 gap-3">
        <div v-for="(colum, index) in columns" class="gap-3 grid">
            <div v-for="ad in colum">
                <Ad :ad="ad"></Ad>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            // columns: 3,
            bg_colors: ['lime, green', 'esmerald', 'sky', 'teal', 'cyan', 'sky', 'fuchsia', 'rose', 'orange'],
            hex_colors: ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'],
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
            ]
        }
    },

    computed: {


        columns() {
            // Número de columnas que quieres mostrar
            const numColumns = 3;

            // Inicializar un array con el número de columnas especificado
            const initialColumns = Array.from({ length: numColumns }, () => []);

            // Distribuir los anuncios en las columnas usando reduce
            const distributedAds = this.ads.reduce((columns, ad, index) => {
                const columnIndex = index % numColumns;
                columns[columnIndex].push(ad);
                return columns;
            }, initialColumns);

            return distributedAds;
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