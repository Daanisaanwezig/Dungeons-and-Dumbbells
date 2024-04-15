<script setup lang="ts">
defineProps<{
    inputType: string,
    inputRows?: number,
    inputName: string,
    placeholder?: string,
    label?: Text
}>()
</script>

<template>
    <div v-if="inputType == 'text'" class="c-text-input">
        <label :for="inputName">{{ label }}</label>
        <input type="text" :id="inputName" :placeholder="placeholder">
    </div>
    <div v-else class="c-text-input">
        <label :for="inputName">{{ label }}</label>
        <textarea name="" :id="inputName" cols="30" :rows="inputRows ? inputRows : 3" :placeholder="placeholder"></textarea>
    </div>
</template>

<style>
.c-text-input {
    display: flex;
    flex-direction: column;
}
.c-text-input label {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 12px;
}
.c-text-input input,
.c-text-input textarea {
    border: 1px solid;
    padding: 12px;
    background: transparent;
}
</style>