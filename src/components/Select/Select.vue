<template>
    <ul class="select">
        <li class="select__item"
            v-for="(item, i) of Object.keys(currencys)"
            :class="[active === item ? 'select__item_active' : '']"
            :key="i"
            :data-name="item" 
            :data-convert="convert" 
            @click="selectMethod"
        >
            {{ item }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'SelectCurrency',
        props: {
            active: String,
            currencys: Object,
            convert: String,
            selectMethod: Function,
        },
    }
</script>

<style lang="scss" scoped>
    $select-main-color: #555;
    $select-active-color: #fff;

    .select {
        background-color: $select-main-color;
        border: .1rem solid $select-main-color;
        margin-top: .5rem;
        
        &__item {
            background-color: $select-main-color;
            border: .1rem solid $select-main-color;
            cursor: pointer;
            text-transform: uppercase;
            transition: .25s;

            &:hover {
                @extend .select__item_active;
                list-style: disc;
            }
        }

        &__item_active {
            background-color: $select-active-color;
            border: .1rem solid $select-main-color;
            color: $select-main-color;
            list-style: disc;
            text-transform: uppercase;
        }
    }
</style>