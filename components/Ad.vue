<template>
    <Card v-if="ad" class="overflow-hidden" :style="{ backgroundColor: ad.bg, color: textColor(ad.bg) }">
        <div class="p-3">
            <div class="font-bold text-center text-lg">{{ ad.title }}</div>
            <div class="text-center font-normal text-base">{{ ad.content }}</div>
        </div>
        <div class="ad-meta text-white" :style="{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }">
            <div v-if="showContact" class="border-b font-bold border-dashed">Contacto</div>
            <div class="flex justify-between p-1">
                <div>
                    <Icon :name="showContact ? 'ic:baseline-phone' : 'mdi:eye'"></Icon>
                    <span>{{ showContact ? ad.contact.mobile_number : ad.views }}</span>
                </div>
                <div>
                    <Icon :name="showContact ? 'ic:baseline-email' : 'mdi:location'"></Icon>
                    <span>{{ showContact ? ad.contact.email : ad.location }}</span>
                </div>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">

const props = defineProps({
    ad: {
        type: Object,
        required: true,
    },

    showContact: {
        type: Boolean,
        default: false,
    },
});


const textColor = (hexBg) => {


    if (!hexBg) return '#000000';

    const hexColor = hexBg.replace('#', '');
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 125 ? '#000000' : '#FFFFFF';
};


</script>

<style></style>
