<template>
    <div>
        <div class="controller">
            <input type="text"
            v-model="recipeName"
            placeholder="요리명을 입력해 주세요"
            class="recipe-name"
            @keyup.enter="searchRecipe()">
            <input type="text"
            v-model="recipeIngre"
            placeholder="재료를 입력해 주세요"
            class="recipe-ingre"
            @keyup.enter="searchRecipe()">
            <button
            class="search-recipe"
            @click="searchRecipe()">Search</button>
        </div>
        <RecipeList></RecipeList>
    </div>
</template>

<script>
import RecipeList from '@/components/RecipeList';
export default {
    components: {
        RecipeList
    },
    data() {
        return {
            recipeName: '',
            recipeIngre: '',
        }
    },
    methods: {
        searchRecipe() {
            if (this.recipeName === ''){
                this.recipeName = '""'
            }
            if (this.recipeIngre === ''){
                this.recipeIngre = '""'
            }
            this.$store.dispatch('search_recipe', {
                endIdx: 5,
                RCP_NM: this.recipeName,
                RCP_PARTS_DTLS: this.recipeIngre
            });
            this.$store.state.recipeName = this.recipeName;
            this.$store.state.recipeIngre = this.recipeIngre;
            this.recipeName = '';
            this.recipeIngre = '';
        }
    }
}
</script>

<style>
    .controller {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 3vw;
        box-sizing: border-box;
    }

    .controller input {
        width: 35%;
        padding: 2vw;
        font-size: 0.7rem;
        font-weight: var(--sb);
        background: #e5e5e5;
        outline: none;
        border-radius: 0.5rem;
        border: none;
    }

    .controller .search-recipe {
        width: 19%;
        color: var(--white);
        background: var(--black);
        border-radius: 0.5rem;
        border: none;
    }
</style>