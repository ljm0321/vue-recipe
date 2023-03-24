<template>
    <div class="recommend">
        <RecipeLoading v-if="recipeLoading"></RecipeLoading>
        <h2 class="title">이 달의 레시피</h2>
        <div class="recommend-wrap">
            <div class="recommend-list"
                v-for="recipeRecent in recipesRecent"
                :key="recipeRecent.RCP_NM">
                <router-link :to="`/search/${recipeRecent.RCP_NM}`">
                    <li class="recipe__img-line"></li>
                    <li class="recipe__img">
                        <img :src="recipeRecent.ATT_FILE_NO_MAIN" alt="">
                    </li>
                    <ul class="recipe__info">
                        <li class="recipe__info-name">{{recipeRecent.RCP_NM}}</li>
                        <li class="recipe__info-info"><span>{{recipeRecent.RCP_PAT2}} | </span><span>중량 {{recipeRecent.INFO_WGT}} | </span><span>열량 {{recipeRecent.INFO_ENG}}</span></li>
                        <li class="recipe__info-ingre">{{recipeRecent.RCP_PARTS_DTLS}}</li>
                    </ul>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import RecipeLoading from '@/components/RecipeLoading';
export default {
    components: {
        RecipeLoading
    },
    data() {
        return {
            thisMonth: this.getThisMonth()
        }
    },
    computed: {
        recipesRecent() {
            return this.$store.state.recipeRecent;
        },
        recipeLoading() {
            return this.$store.state.loading;
        }
    },
    created() {
        this.$store.dispatch('search_recipe_recent', {
            CHNG_DT: this.thisMonth
        })
    }, 
    methods: {
        getThisMonth() {
            let now = new Date();
            let thisYear = String(now.getFullYear());
            let thisMonth = String('0' + (now.getMonth() + 1)).slice(-2);
            let recentDate = thisYear + thisMonth + '01';
            return recentDate;
        }
    }
}
</script>

<style>
    .title {
        padding: 0 0 6vw;
        text-align: center;
        font-size: 1.3rem;
    }

    .recommend .recommend-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 8vw 5vw;
    }

    .recommend .recipe__img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 80vw;
        height: 80vw;
        border-radius: 50%;
        overflow: hidden;
    }

    .recommend .recipe__img-line {
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

    .recommend .recipe__img img {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
    }

    .recommend .recipe__info {
        padding: 10vw 3vw 0;
        text-align: center;
    }

    .recommend .recipe__info-name {
        padding-bottom: 3vw;
        font-size: 1.4rem;
        font-weight: var(--bd);
    }

    .recommend .recipe__info-info {
        padding-bottom: 2vw;
        font-size: 0.9rem;
        font-weight: var(--sb);
        color: var(--4a);
    }

    .recommend .recipe__info-ingre {
        font-size: 0.9rem;
        color: var(--4a);
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
</style>