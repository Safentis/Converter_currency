<template>
    <p class="total-score">
        Оценка:
        <span class="total-score__sign"> 
            $ 
        </span>
        {{ totalScore.toFixed(2) }} 
    </p>
</template>

<script>
    export default {
        name: 'BriefcaseTotalScore',
        props: {
            totalScore: Number
        }
    }
</script>

<style lang="scss" scoped>
    $font-size-22: 2.2rem;
    $color-green: green;

    .total-score {
        font-size: $font-size-22;
        margin: 1rem 0;
        text-align: right;
        
        &__sign {
            color: $color-green;
        }
    }
</style>