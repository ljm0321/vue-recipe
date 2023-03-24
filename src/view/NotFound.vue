<template>
    <div class="not-found">
        <div class="not-found__text">
            Page Not Found! 😥
        </div>
        <router-link 
            :to="`/`"
            class="go-home">Go Home</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .not-found {
        min-height: calc(100vh - 7.9rem);
    }

    .not-found__text {
        padding: 15vw 0;
        text-align: center;
        font-weight: var(--bd);
        font-size: 1.4rem;
    }

    .go-home {
        display: block;
        width: fit-content;
        margin: 0 auto;
        padding: 2vw 3vw;
        color: var(--white);
        background: var(--black);
        border-radius: 0.5rem;
    }
</style>