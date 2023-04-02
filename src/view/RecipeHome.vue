<template>
    <div class="home">
        <li class="logo">Recipe</li>
        <li>안녕하세요. {{ userInfo.userId }}님!</li>
        <li>{{ homeText }}</li>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['homeText', 'userInfo'])
    }
}
</script>

<style>
    .home {
        min-height: calc(100vh - 7.9rem);
        font-weight: var(--sb);
        font-size: 1.5rem;
        color: var(--black);
        text-align: center;
        line-height: 1.5;
    }

    .home .logo{
        font-family: 'Caveat', cursive;
        font-size: 2rem;
        font-weight: var(--rg);
    }
</style>