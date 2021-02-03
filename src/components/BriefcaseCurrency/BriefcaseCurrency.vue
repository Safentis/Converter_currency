<template>
    <div class="score briefcase__score">
        <h1>{{ totalScore.toFixed(2) }} $</h1>
        <ul class="score__value" v-for="(item, i) of Object.values(currencys.usd)" :key="i">
            <li class="score__sign">
                <img class="score__sign-icon" :src="item.image" width="25" height="25">
            </li>
            <li class="score__count">
                {{ item.symbol }}
                    :
                {{ item.current_price }}
                    :
                {{ score[i].value }} 
            </li>
            <li class="score__add">
                <Button content="$" :attr="i" :buttonMethod="operationOnWindow"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import Button from '../Button/Button';

    export default {
        name: "BriefcaseCurrency",
        components: {
            Button,
        },
        props: {
            currencys: Object,
            operationOnWindow: Function,
            totalScore: Number,
            score: Array,
        },
    }
</script>

<style lang="scss">
    $color-score-sign: rgb(18, 174, 18);

    .score {
        align-items: flex-start;
        display: flex;
        flex-flow: column;

        &__value {
            align-items: center;
            display: flex;
            justify-content: center;
            font-size: 2rem;
        }

        &__count {
            margin: 0 .5rem;
        }

        &__sign {
            color: $color-score-sign;
        }

        &__add {
            margin: 0 0 0 1.5rem;
        }
    }
</style>