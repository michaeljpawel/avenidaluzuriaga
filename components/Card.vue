<template>
    <div class="bg-white soft-shadow rounded-md">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
</script>

<style scooped>
.soft-shadow {
    box-shadow: 0 1px 2px rgba(56, 65, 74, .2);
}
</style>
