<template >
    <div id="modal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full">
        <!-- Modal content -->
        <div v-if="modelValue" class="relative w-full max-w-2xl h-auto">
            <div class="relative bg-white rounded-lg shadow">
                <button id="closeButton" type="button" @click="hideModal"
                    class="absolute top-2 right-2 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

import { Modal } from 'flowbite'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});

let modal = null;


watch(() => props.modelValue, (newValue, oldValue) => {
    if (newValue) {
        showModal()
    } else {
        hideModal()
    }
})

const showModal = () => {
    modal.show();
    console.log('mostrando');
};

const hideModal = () => {
    modal.hide();
};

const emit = defineEmits();

onMounted(() => {
    const $modalElement = document.querySelector('#modal');
    const modalOptions = {
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        onHide: () => {
            console.log('modal is hidden');
            emit('update:modelValue', false);
        },
        onShow: () => {
            console.log('modal is shown');

        },
    }
    if ($modalElement) {
        modal = new Modal($modalElement, modalOptions);
    }
})
</script>

<style scoped>
#closeButton:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
}

#closeButton {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.7);
}
</style>