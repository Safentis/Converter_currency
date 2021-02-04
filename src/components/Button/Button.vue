<template>
    <button 
        type="button" 
        class="button" 
        :class="className"
        :data-button="attr" 
        @click="onHandleButton"

    >
        {{ content }}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            attr: Number,
            className: String,
            content: String,
            onHandleButton: Function
        }
    }
</script>

<style lang="scss" scoped>
    $color-button: #fff;
    $color-content:  #555;;
    $color-border: #000;

    $color-hover-button: #555;
    $color-hover-content: #fff;
    $color-hover-border: #555;

    .button {
        background-color: inherit;
        border: none;
        cursor: pointer;
        display: flex;
        font-size: 2rem;
        justify-content: center;
        transition: .2s;

        min-height: 3rem;
        min-width: 3rem;
        
        outline: none;
        &:hover {
            color: $color-hover-content;
        }
    }
</style>