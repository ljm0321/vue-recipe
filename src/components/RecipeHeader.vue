<template>
    <header>
        <router-link class="logo"
            :to="`/`"
            tag="div">
            Recipe
        </router-link>
        <div class="nav">
            <li class="nav-icon"
                @click="navToggle">
                <img v-if="!navShow" src="@/image/menu.png">
                <img v-else class="nav-icon__close" src="@/image/close.png">
            </li>
            <div class="nav-dim"
                v-if="navShow"
                @click="navToggle">
                <ul class="nav-list">
                    <li class="nav-list__nav"
                        v-for="nav in navi"
                        :key="nav.name">
                        <router-link
                            :to="nav.href"
                            :class="[navActive ? 'isActive' : '', nav.name]"
                            tag="p">
                            {{ nav.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-link class="about"
            :to="`/myPage`"
            tag="div">
            <img src="@/image/user.png">
        </router-link>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navi: [
                {
                    name: 'Home',
                    href: '/'
                },
                {
                    name: 'Search',
                    href: '/search'
                },
                {
                    name: 'Monthly',
                    href: '/Monthly'
                },
            ],
            navShow: false,
            navActive: false
        }
    },
    methods: {
        navToggle() {
            this.navShow = !this.navShow;
        }
    }
}
</script>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3.5rem;
        background: #F5F5F5;
        z-index: 1;
    }

    .logo {
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        font-family: 'Caveat', cursive;
        font-size: 2rem;
    }

    .nav-icon {
        position: absolute;
        left: 3vw;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;
    }

    .nav-icon img {
        width: 2rem;
    }

    .nav-icon img.nav-icon__close {
        width: 1.4rem;
        padding-left: 0.3rem;
    }

    .about {
        position: absolute;
        top: 54%;
        right: 3vw;
        transform: translateY(-50%);
    }

    .about img {
        width: 2rem;
    }

    .nav-dim {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: #00000029;
        overflow: hidden;
    }
    
    .nav-list {
        position: absolute;
        left: 0;
        top: 0;
        width: 50vw;
        height: 100vh;
        padding: 30vw 0 0 20vw;
        font-size: 2rem;
        font-weight: var(--bd);
        background: #Fff;
        z-index: 2;
    }

    .nav-list__nav {
        padding-bottom: 3vw;
    }
</style>