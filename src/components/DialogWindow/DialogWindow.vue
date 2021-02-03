<template>
    <div class="window" v-if="isOpenDialogWindow">
        <div class="window__content">
            <Button className="window__button-close" content="+" :buttonMethod="operationOnWindow" />
            <h2 class="window__title">Coin: {{currencys.usd[index].symbol}}</h2>
            <div class="controllers window__controllers">
                <Button className="controllers__decrement" content="-" :buttonMethod="scoreDecrement"/>
                
                <label class="label controllers__label">
                    <Input className="input input-correct-data_green" :value="score[index].value" :isDisabled="true" @input="scoreChange"/>
                    <span class="label__text"> $</span>
                </label>
                
                <Button className="controllers__increment" content="+" :buttonMethod="scoreIncrement"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '../Button/Button';
    import Input from '../Input/Input.vue';

    export default {
        name: 'DialogWindow',
        components: {
            Button,
            Input,
        },
        props: {
            currencys: Object,
            operationOnWindow: Function,
            score: Array,
            scoreIncrement: Function,
            scoreDecrement: Function,
            scoreChange: Function,
            isOpenDialogWindow: Boolean,
            index: {},
        },
    }
</script>

<style lang="scss" scoped>
    $color-bg-window: rgba(255, 255, 255, 0);
    $color-bg-sub-window: rgb(112, 112, 111);
    $color-shadow-window: #555;

    .window {
        background-color: $color-bg-window;
        position: absolute;
        height: 100vh;
        left: 0;
        top: 0;
        width: 100vw;

        &__content {
            background-color: $color-bg-sub-window;
            border-radius: .5rem;
            box-shadow: .1rem .1rem .25rem $color-shadow-window, -.1rem -.1rem .25rem $color-shadow-window;
            padding: 1rem;
            height: 70%;
            margin: 5% auto;
            width: 50%;

        }

        &__title {
            font-size: 2rem;
            text-transform: uppercase;
            margin-top: 15%;
        }

        &__button-close {
            display: block;
            margin-left: auto;
        }

        &__controllers {
            align-items: center;
            display: flex;
            justify-content: space-evenly;
        }
    }

    .controllers {

        &__label {}
        &__score {}
        &__increment,
        &__decrement {
            height: 2.7rem;
            width: 2.569rem;
        }
    }
</style>