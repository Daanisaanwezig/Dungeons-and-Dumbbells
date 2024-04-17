<script setup lang="ts">
defineProps<{
    inputType: string,
    inputRows?: number,
    inputName: string,
    placeholder?: string,
    label?: string
}>()
</script>

<template>
    <div v-if="inputType == 'text'" class="c-text-input">
        <label :for="inputName">{{ label }}</label>
        <input type="text" :id="inputName" :placeholder="placeholder">
        <div class="c-text-input__background"></div>
    </div>
    <div v-else class="c-text-input">
        <label :for="inputName">{{ label }}</label>
        <textarea name="" :id="inputName" cols="30" :rows="inputRows ? inputRows : 3" :placeholder="placeholder"></textarea>
        <div class="c-text-input__background"></div>
    </div>
</template>

<style>
.c-text-input {
    position: relative;
    z-index: 1;
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
    position: relative;
    border: 1px solid;
    padding: 12px;
    background: transparent;
    border: none;
    outline: none;
}
.c-text-input .c-text-input__background {
    position: absolute;
    z-index: -1;
    inset: -4px;
    background-image: url('/public/creation-banner.png');
    background-size: 100% 100%;
    margin-top: 54px;
}
</style>