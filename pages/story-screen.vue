<template>
    <div class="background flex-container">
        <div class="story">{{ story }}</div>
        <div class="flex-container">
            <div class="flex-container row">
                <div class="flex-container radiobutton">    
                    <input v-on:change="Response()" type="radio" id="one" value="1" v-model="picked" />
                    <label for="one">One</label>
                </div>

                <div class="flex-container radiobutton">    
                    <input v-on:change="Response()" type="radio" id="two" value="2" v-model="picked" />
                    <label for="two">Two</label>
                </div>

                <div class="flex-container radiobutton">
                    <input v-on:change="Response()" type="radio" id="three" value="3" v-model="picked" />
                    <label for="two">Three</label>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
    .background{
        background-image: url('public/appearance-banner.png');
        background-size: 100% 100%;
        min-height: 100vh;
        height: fit-content;
        width: 100vw;
    }
    .story{
        /* display: none; */
        margin: 10vw;
        white-space: pre-wrap;
    }
    .flex-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .row{
        flex-direction: row;
    }
    .radiobutton{
        margin: 2vh;
    }
    input:focus{
        outline: none;
    }
</style>

<script scoped setup lang="ts">
    import textGen from "~/composables/textGen";
    import textToSpeech from "~/composables/textToSpeech";
    import { ref } from 'vue'

    const story = ref()

    let picked = ref('')

    function setText() {
        story.value = localStorage.getItem('story')
        //textToSpeech(story.value)
        picked = ref('');
    }
    setTimeout(setText, 6000)

    function Response(){
        localStorage.setItem('response', picked.value)
        textGen()
        setTimeout(setText, 6000)
    }
    
    
</script>