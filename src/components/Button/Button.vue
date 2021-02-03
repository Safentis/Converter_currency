<template>
    <button 
        class="button" 
        type="button"
        :class="className" 
        :data-button="attr" 
        @click="buttonMethod"
    >
        {{ content }}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            content: String,
            className: String,
            buttonMethod: Function,
            attr: Number,
        },
    }
</script>

<style lang="scss">
    $main-button-color: #fff;
    $hover-button-color: rgb(70, 70, 70);

    .button {
        background-color: inherit;
        border: .1rem solid $main-button-color;
        border-radius: 50%;
        color: $main-button-color;
        cursor: pointer;
        font-size: 2rem;
        outline: none;
        transition: .4s;

        &:hover {
            border: .1rem solid $hover-button-color;
            color: $hover-button-color;
        }
    }
</style>