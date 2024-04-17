<script scoped setup lang="ts">
    import { ref } from 'vue'

    import textGen from "~/composables/textGen"
    import textToSpeech from "~/composables/textToSpeech"
    import { GPS } from "~/composables/gps"

    const gps = GPS()

    const story = ref()

    let picked = ref('')

    function setText() {
        if ( process.client ) {
            story.value = localStorage.getItem('story')
            //textToSpeech(story.value)
            picked = ref('');
        }
    }
    setTimeout(setText, 6000)

    function Response(){
        console.log( picked.value );
        if ( process.client ) {
            localStorage.setItem('response', picked.value)
    
            gps.resetGPSGoal()
            gps.watchLocation( 20 ) // Sets goal of 20 meters to continue
            watch(gps.goalAchieved, (newVal: boolean, oldVal: boolean) => {
                textGen()
                setTimeout(setText, 6000)
            })
        }
    }
</script>

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
        <div class="progress-bar" v-if="gps.hasActiveGoal.value">
            <p>Walk for {{ gps.goal }} meters to continue...<br/>You've walked {{ gps.distanceTraveled }}</p>
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

    .progress-bar__bar {
        width: 100%;
        background-color: #ccc;
    }
    .progress-bar__bar__inner {
        background-color: rgb(5, 104, 5);
    }
</style>
