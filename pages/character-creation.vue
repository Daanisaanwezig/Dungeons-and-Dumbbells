<script setup lang="ts">
function submitForm() {
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
                    inputRows="10"
                    inputName="Appearance"
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
    
        <Button @button-click="submitForm()">Submit</Button>
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