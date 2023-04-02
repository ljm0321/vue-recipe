<template>
    <div class="search">
        <RecipeController></RecipeController>
    </div>
</template>

<script>
import RecipeController from '@/components/RecipeController';

export default {
    components: {
        RecipeController
    }
}

</script>

<style>
    .search {
        min-height: calc(100vh - 7.9rem);
    }
</style>