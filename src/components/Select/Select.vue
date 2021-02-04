<template>
    <ul class="select">
        <li class="select__item" v-for="(item, i) of Object.keys(currencys)" 
            :class="[item === isConvertValue ? 'select__item_active' : '']"            
            :key="i" 
            :data-name="item"
            :data-convert="type" 
            @click="onHandleSelect"
            >

            {{ item }}
        </li>
    </ul>    
</template>

<script>
    export default {
        name: 'Select',
        props: {
            currencys: Object,
            type: String,
            onHandleSelect: Function,
            isConvertValue: String,
        },
    }
</script>

<style lang="scss" scoped>
    $select-main-color: rgba(0, 0, 0, 0.616);
    $select-main-dark: #000;
    $select-active-color: #fff;
    $color-grey: #888;
    $color-dark-grey: #777;
    
    .select {
        margin-top: .5rem;
        
        &__item {
            box-shadow: .0rem .0rem .1rem $color-grey, .0rem .1rem .1rem $color-dark-grey;
            color: $select-main-color;
            cursor: pointer;
            font-size: 2rem;
            text-transform: uppercase;
            margin: .5rem 0;
            transition: .25s;

            &:hover {
                @extend .select__item_active;
                list-style: disc;
            }
        }
        &__item_active {
            background-color: $select-active-color;
            color: $select-main-dark;
            list-style: disc;
            text-transform: uppercase;
        }
    }
</style>