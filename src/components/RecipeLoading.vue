<template>
    <div class="loading">
        <p class="loading__text">Loading...</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(141, 141, 141, 0.253);
        overflow: hidden;
        z-index: 1;
    }
    
    .loading__text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-weight: var(--sb);
        font-size: 1.5rem;
        color: var(--black);
    }
</style>