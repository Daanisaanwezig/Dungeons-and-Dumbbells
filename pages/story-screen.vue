<template>
    <div class="background">
        <button @click="textGen()">test script</button>
        <input v-model="response" placeholder="edit me" />
        <button @click="Response()">save response</button>
    </div>
</template>

<style>
    .background{
        background-image: url('public/appearance-banner.png');
        background-size: 100% 100%;
    }
</style>

<script scoped setup lang="ts">
    import textGen from "~/composables/textGen";
    import { ref } from 'vue'

    const response = ref('')

    function Response(){
        localStorage.setItem('response', response.value)
        console.log(response.value)
    }
    
</script>