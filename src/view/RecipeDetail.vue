<template>
    <div class="detail">
        <RecipeLoading v-if="recipeLoading"></RecipeLoading>
        <li class="recipe__img">
            <img :src="recipeDetail.ATT_FILE_NO_MAIN" alt="">
        </li>
        <ul class="recipe__info">
            <li class="recipe__info-name">{{recipeDetail.RCP_NM}}</li>
            <li class="recipe__info-info"><span>{{recipeDetail.RCP_PAT2}} | </span><span>중량 {{recipeDetail.INFO_WGT}} | </span><span>열량 {{recipeDetail.INFO_ENG}}</span></li>
            <li class="recipe__info-ingre">{{recipeDetail.RCP_PARTS_DTLS}}</li>
        </ul>
        <ul class="recipe__manual">
            <img :src="recipeDetail.MANUAL_IMG01" alt="">
            <p>{{ recipeDetail.MANUAL01 }}</p>
            <img :src="recipeDetail.MANUAL_IMG02" alt="">
            <p>{{ recipeDetail.MANUAL02 }}</p>
            <img :src="recipeDetail.MANUAL_IMG03" alt="">
            <p>{{ recipeDetail.MANUAL03 }}</p>
            <img :src="recipeDetail.MANUAL_IMG04" alt="">
            <p>{{ recipeDetail.MANUAL04 }}</p>
            <img :src="recipeDetail.MANUAL_IMG05" alt="">
            <p>{{ recipeDetail.MANUAL05 }}</p>
            <img :src="recipeDetail.MANUAL_IMG06" alt="">
            <p>{{ recipeDetail.MANUAL06 }}</p>
            <img :src="recipeDetail.MANUAL_IMG07" alt="">
            <p>{{ recipeDetail.MANUAL07 }}</p>
            <img :src="recipeDetail.MANUAL_IMG08" alt="">
            <p>{{ recipeDetail.MANUAL08 }}</p>
            <img :src="recipeDetail.MANUAL_IMG09" alt="">
            <p>{{ recipeDetail.MANUAL09 }}</p>
            <img :src="recipeDetail.MANUAL_IMG10" alt="">
            <p>{{ recipeDetail.MANUAL10 }}</p>
            <img :src="recipeDetail.MANUAL_IMG11" alt="">
            <p>{{ recipeDetail.MANUAL11 }}</p>
            <img :src="recipeDetail.MANUAL_IMG12" alt="">
            <p>{{ recipeDetail.MANUAL12 }}</p>
            <img :src="recipeDetail.MANUAL_IMG13" alt="">
            <p>{{ recipeDetail.MANUAL13 }}</p>
            <img :src="recipeDetail.MANUAL_IMG14" alt="">
            <p>{{ recipeDetail.MANUAL14 }}</p>
            <img :src="recipeDetail.MANUAL_IMG15" alt="">
            <p>{{ recipeDetail.MANUAL15 }}</p>
            <img :src="recipeDetail.MANUAL_IMG16" alt="">
            <p>{{ recipeDetail.MANUAL16 }}</p>
            <img :src="recipeDetail.MANUAL_IMG17" alt="">
            <p>{{ recipeDetail.MANUAL17 }}</p>
            <img :src="recipeDetail.MANUAL_IMG18" alt="">
            <p>{{ recipeDetail.MANUAL18 }}</p>
            <img :src="recipeDetail.MANUAL_IMG19" alt="">
            <p>{{ recipeDetail.MANUAL19 }}</p>
            <img :src="recipeDetail.MANUAL_IMG20" alt="">
            <p>{{ recipeDetail.MANUAL20 }}</p>
        </ul>
    </div>
</template>

<script>
import RecipeLoading from '@/components/RecipeLoading';

export default {
    components: {
        RecipeLoading
    },
    computed: {
        recipeDetail() {
            return this.$store.state.recipeDetail;
        },
        recipeLoading() {
            return this.$store.state.loading;
        }
    },
    created() {
        this.$store.dispatch('recipe_detail', {
            RCP_NM: this.$route.params.RCP_NM
        })
    }
}
</script>

<style>
    .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 8vw 5vw;
    }

    .detail .recipe__img {
        position: relative;
        width: 80vw;
        height: 80vw;
        border-radius: 50%;
        overflow: hidden;
    }

    .detail .recipe__img img {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
    }

    .detail .recipe__info {
        padding: 10vw 3vw 0;
        text-align: center;
    }

    .detail .recipe__info-name {
        padding-bottom: 3vw;
        font-size: 1.4rem;
        font-weight: var(--bd);
    }

    .detail .recipe__info-info {
        padding-bottom: 2vw;
        font-size: 0.9rem;
        font-weight: var(--sb);
        color: var(--4a);
    }

    .detail .recipe__info-ingre {
        font-size: 0.9rem;
        color: var(--4a);
        line-height: 1.4;
        padding-bottom: 5vw;
    }

    .detail .recipe__manual img {
        display: block;
        width: 60vw;
        margin: 0 auto;
    }

    .detail .recipe__manual p {
        font-size: 0.9rem;
        color: var(--4a);
        line-height: 1.4;
    }
</style>