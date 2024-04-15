<template>
    <div class="background">
        <img class="title" src="public/title.png">
        <div class="select-container">
            <ul class="option-list">
                <li class="option">continue</li>
                <li class="option">new campaign</li>
                <li class="option">settings</li>
            </ul>
        </div>
    </div>
</template>

<style>
body{
    overflow: hidden;
}
.background{
    background-image: url('public/home-background.jpeg');
    height: 100vh;
    width: 100vw;
    background-position-x: right;
}
.title{
    width: 85vw;
    margin: 13vh 5vh 5vh 3vh;
    filter: drop-shadow(3px 3px 4px rgba(0,0,0,0.7));
}
.select-container{
    background-image: url('public/book.png');
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 45vh;
    margin: 10vh 0 0 -80vw;
    transform: rotate(2.5deg);
}
.option-list{
    list-style: none;
    font-size: clamp(1rem, 7vw, 2rem);
    margin-right: 35vw;
    transform: rotate(-2.5deg);
    filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.3));
}
.option{
    margin-bottom: 4vh;
}
</style>

<script>
export default {
// Any additional Vue.js options can go here
}
</script>  