<template>
    <ul class="diagramm briefcase__diagramm">
        <li class="diagramm__column" v-for="(item, i) of score" 
            :style="{ height: item.value + 'px' }"
            :key="i" 
        >
            {{ item.name + ' ' + (item.value * item.currentPrice).toFixed(4) }}    
        </li>
    </ul>
</template>

<script>

    export default {
        name: 'BriefcaseDiagramm',
        props: {
            score: Array,
        },
        data: () => {
            return {

            }
        },
        methods: {

        }
    }

</script>

<style lang="scss" scoped>
    .diagramm {
        align-items: flex-end;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;

        &__column {
            background-color: #555;
            height: .1rem;
        }
    }
</style>