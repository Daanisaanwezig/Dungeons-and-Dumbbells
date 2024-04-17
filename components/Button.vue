<script setup lang="ts">
const emit = defineEmits(['button-click'])
</script>

<template>
    <button @click="emit('button-click')" class="c-button"><slot /></button>
</template>

<style>
.c-button {
    width: 100%;
    margin-top: 12px;
    padding: 12px;
}
</style>