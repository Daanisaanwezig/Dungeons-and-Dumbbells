<script setup lang="ts">
import textGen from "~/composables/textGen";
function submitForm() {
    let textInputs = ['playerName', 'background', 'appearance', 'personalityTraits', 'flaws', 'favouriteExercices']

    let formData: {[key: string]: string} = {}
    textInputs.forEach( inputId => {
        const inputElem = <HTMLInputElement>document.getElementById( inputId )
        if (! inputElem ) return console.warn( `Input with id ${inputId} not found...` );

        const inputVal = inputElem.value
        formData[inputId] = inputVal
    })

    localStorage.setItem( 'character', JSON.stringify( formData ) )   
    textGen()
}
</script>

<template>
    <div class="p-character-creation">
        <TextInput  inputType="text"
                    inputName="playerName"
                    label="Player Name" />
        <TextInput  inputType="textarea"
                    inputName="background"
                    label="Background" />
        <TextInput  inputType="textarea"
                    :inputRows="10"
                    inputName="appearance"
                    label="Appearance" />
        <TextInput  inputType="textarea"
                    inputName="personalityTraits"
                    label="Personality Traits" />
        <TextInput  inputType="textarea"
                    inputName="flaws"
                    label="Flaws" />
        <TextInput  inputType="textarea"
                    inputName="favouriteExercices"
                    label="Favourite exercises" />
    
        <Button @button-click="submitForm()"><NuxtLink to="/story-screen">Submit</NuxtLink></Button>
    </div>
</template>

<style>
.p-character-creation {
    padding: 96px 32px;
    background-image: url('public/leather-background.png');
    background-size: cover;
    background-position: center;
}
/* background color: #fbfbfb */
</style>