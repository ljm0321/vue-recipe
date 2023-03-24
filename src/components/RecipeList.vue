<template>
    <div class="recipe-list">
        <div v-if="!recipesSearch"    
            class="no-recipe">
            <li>찾으시는 레시피가 없습니다.</li>
            <button 
                @click="goSearch()"
                class="go-search">다시 검색하기</button>
        </div>
        <div v-else>
            <RecipeLoading v-if="loading"></RecipeLoading>
            <div class="recomemnd-nodata">
                {{ searchText }}
            </div>
            <div class="recommend-wrap">
                <div class="recommend-list"
                    v-for="recipeSearch in recipesSearch"
                    :key="recipeSearch.RCP_NM">
                    <router-link :to="`/search/${recipeSearch.RCP_NM}`">
                        <li class="recipe__img-line"></li>
                        <li class="recipe__img">
                            <img :src="recipeSearch.ATT_FILE_NO_MAIN" alt="">
                        </li>
                        <ul class="recipe__info">
                            <li class="recipe__info-name">{{recipeSearch.RCP_NM}}</li>
                            <li class="recipe__info-info"><span>{{recipeSearch.RCP_PAT2}} | </span><span>중량 {{recipeSearch.INFO_WGT}} | </span><span>열량 {{recipeSearch.INFO_ENG}}</span></li>
                            <li class="recipe__info-ingre">{{recipeSearch.RCP_PARTS_DTLS}}</li>
                        </ul>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RecipeLoading from '@/components/RecipeLoading';
import { mapState } from 'vuex';

export default {
    components: {
        RecipeLoading
    },
    computed: {
        recipesSearch() {
            return this.$store.state.recipeSearch;
        },
        ...mapState(['loading', 'searchText'])
    },
    methods: {
        goSearch() {
            this.$router.go();
        }
    }
}
</script>

<style>
    .no-recipe {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);  
        width: 100%;      
        text-align: center;
        font-size: 1rem;
        font-weight: var(--sb);
    }

    .no-recipe .go-search {
        margin-top: 5vw;
        padding: 2vw 5vw;
        font-size: 1.1rem;
        color: var(--white);
        background: var(--black);
        border-radius: 2rem;
        border: none;
    }

    .recomemnd-nodata {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        font-weight: var(--sb);
        font-size: 1.5rem;
        color: var(--black);
        text-align: center;
    }

    .recipe-list .recommend-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 8vw 5vw;
    }

    .recipe-list .recipe__img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 80vw;
        height: 80vw;
        border-radius: 50%;
        overflow: hidden;
    }

    .recipe-list .recipe__img-line {
        position: absolute;
        top: 5vw;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        width: 85vw;
        height: 85vw;
        border-radius: 50%;
        border: 1px solid var(--c7);
    }

    .recipe-list .recipe__img img {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
    }

    .recipe-list .recipe__info {
        padding: 10vw 3vw 0;
        text-align: center;
    }

    .recipe-list .recipe__info-name {
        padding-bottom: 3vw;
        font-size: 1.4rem;
        font-weight: var(--bd);
    }

    .recipe-list .recipe__info-info {
        padding-bottom: 2vw;
        font-size: 0.9rem;
        font-weight: var(--sb);
        color: var(--4a);
    }

    .recipe-list .recipe__info-ingre {
        font-size: 0.9rem;
        color: var(--4a);
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
</style>