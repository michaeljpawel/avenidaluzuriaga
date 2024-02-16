import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        const isXs = xs();
        const isSm = sm();
        const isMd = md();
        const isLg = lg();
        const isXl = xl();
        const isXxl = xxl();
        const isXxxl = xxxl();

        return {
            isXs,
            isSm,
            isMd,
            isLg,
            isXl,
            isXxl,
            isXxxl
        };
    },
})
