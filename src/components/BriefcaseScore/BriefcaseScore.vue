<template>
    <div class="score briefcase__score">
        <ul class="score__value">
            <li class="score__text">Money: </li>
            <li class="score__count">{{ score }}</li>
            <li class="score__sign">$</li>
        </ul>
        <Button className="score__button-add" content="+" :buttonMethod="operationOnWindow"/>
    </div>
</template>

<script>
    import Button from '../Button/Button';

    export default {
        name: "BriefcaseScore",
        components: {
            Button,
        },
        props: {
            score: {
                type: Number,
            },
            operationOnWindow: {
                type: Function,
            }
        }
    }

</script>

<style lang="scss">
    $color-score-sign: rgb(18, 174, 18);

    .score {
        align-items: center;
        display: flex;

        &__value {
            align-items: center;
            display: flex;
            justify-content: flex-end;
            font-size: 2rem;
        }

        &__count {
            margin: 0 1rem;
        }

        &__sign {
            color: $color-score-sign;
        }

        &__button-add {
            margin: 0 0 0 1.5rem;
        }
    }
</style>