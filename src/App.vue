<template>
    <div id="app">
        <RecipeHeader></RecipeHeader>
        <router-view></router-view>
        <RecipeFooter></RecipeFooter>
    </div>
</template>

<script>

import RecipeHeader from '@/components/RecipeHeader';
import RecipeFooter from '@/components/RecipeFooter';
export default {
    name: 'App',
    components: {
        RecipeHeader,
        RecipeFooter
    }
}
</script>

<style>
#app {
    padding-top: 4.5rem;
    background: #F5F5F5;
}
</style>
