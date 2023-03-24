<template>
    <div class="mypage">
        <li class="user-id">{{ userInfo.userId }}</li>
        <li class="user-email">{{ userInfo.userEmail }}</li>
        <li class="user-contact">{{ userInfo.tel1 }} - {{ userInfo.tel2 }} - {{ userInfo.tel3 }}</li>
        <router-link class="edit-userinfo"
            :to="`/edit`">
            Edit
        </router-link>
    </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.userInfo;
        }
    }
}
</script>

<style>
    .mypage {
        min-height: calc(100vh - 7.9rem);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .mypage .user-id {
        padding: 5vw 0 3vw;
        font-size: 2rem;
        font-weight: var(--sb);
        color: var(--4a);
    }

    .mypage .user-email, .mypage .user-contact {
        padding: 0 0 3vw;
        font-size: 1.2rem;
        font-weight: var(--rg);
        color: var(--4a);
    }

    .edit-userinfo {
        margin-top: 5vw;
        padding: 2vw 6vw;
        color: var(--white);
        background: var(--black);
        border-radius: 0.5rem;
    }
</style>