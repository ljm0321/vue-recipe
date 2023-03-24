<template>
    <div class="edit">
        <h2 class="title">회원정보 변경</h2>
        <div class="edit-form">
            <ul class="edit-form__list">
                <span>Id</span><ul>{{ userInfo.userId }}</ul>
            </ul>
            <ul class="edit-form__list email">
                <span>Email</span>
                <ul>
                    <input type="text" v-model="userInfo.userEmail">
                </ul>
            </ul>
            <ul class="edit-form__list contact">
                <span>Contact</span>
                <ul>
                    <input type="text" @focus="clearInput" v-model="userInfo.tel1" maxlength="3">
                    -
                    <input type="text" @focus="clearInput" v-model="userInfo.tel2" maxlength="4">
                    -
                    <input type="text" @focus="clearInput" v-model="userInfo.tel3" maxlength="4">
                </ul>
            </ul>
            <button class="edit-userinfo">수정</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.userInfo;
        }
    },
    watch: {
        tel1() {
            return this.tel1 = this.tel1.replace(/[^0-9.]/g, '');
        },
        tel2() {
            return this.tel2 = this.tel2.replace(/[^0-9.]/g, '');
        },
        tel3() {
            return this.tel3 = this.tel3.replace(/[^0-9.]/g, '');
        }
    },
    methods: {
        clearInput(value) {
            value.target.value = ''; 
        },
        editUserInfo() {
            this.$store.commit('editUserInfo', this.userInfo)
        }
    }
}
</script>

<style>
    .edit {
        min-height: calc(100vh - 7.9rem);
    }

    .edit-form {
        padding: 8vw 5vw;
    }

    .edit-form__list {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 1rem;
        color: var(--4a);
    }

    .edit-form__list span {
        width: 30vw;
        padding: 2vw 0;
    }

    .edit-form__list ul {
        display: flex;
        justify-content: space-between;
        width: 67vw;
        padding: 2vw;
        border-bottom: 0.5px solid var(--ccc);
}

    .edit-form__list ul input {
        font-size: 1rem;
        font-weight: var(--rg);
        color: var(--4a);
        background: transparent;
        border: none;
        outline: none;
    }

    .edit-form__list.email ul input {
        margin-right: 4%;
    }

    .edit-form__list.email ul select {
        width: 40%;
        margin-left: 4%;
        background: transparent;
        border: none;
        outline: none;
    }
    
    .edit-form__list.contact ul input {
        width: 30%;
        margin:0 3%;
        text-align: center;
    }

    .edit .edit-userinfo {
        position: relative;
        left: 50%;
        top: 5vw;
        transform: translateX(-50%);
        outline: none;
    }
</style>