<template>
    <div class="search">
        <RecipeController></RecipeController>
        <RecipeList></RecipeList>
    </div>
</template>

<script>
import RecipeList from '@/components/RecipeList';
import RecipeController from '@/components/RecipeController';

export default {
    components: {
        RecipeList,
        RecipeController
    }
}
</script>

<style>
    .search {
        min-height: calc(100vh - 7.9rem);
    }
</style>