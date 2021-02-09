<template>
    <section class="modal" v-if="isOpenDialogWindow">
        <div class="modal__inner">
            <Button 
                className="modal__button-close" 
                content="+" 
                :onHandleButton="onHandleModal"
            />
            <div class="modal__content content">
                <div class="content__info">
                    <h2>
                        {{ currencys.usd[index].symbol }} 
                        ({{ currencys.usd[index].name }})
                    </h2>
                </div>
                <div class="content__controls">
                    <Button 
                        className="content__button-increment" 
                        content="+" 
                        :onHandleButton="onScoreIncrement"
                    />
                    <p class="content__coins-score">
                        {{ score[index].value }}
                    </p>
                    <Button 
                        className="content__button-decrement" 
                        content="-" 
                        :onHandleButton="onScoreDecrement"
                    />
                </div>
                <p class="content__field">
                    <Input 
                        :isDisabled="isInputTrue.isDisabled" 
                        :placeholder="isInputTrue.placeholder"
                        @input="onScoreChange" 
                    />
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    import Button from '../../Button/Button';
    import Input from '../../Input/Input.vue';

    export default {
        name: 'BriefcaseModal',
        components: {
            Button,
            Input
        },
        props: {
            currencys: Object,
            onHandleModal: Function,
            score: Array,
            onScoreIncrement: Function,
            onScoreDecrement: Function,
            onScoreChange: Function,
            isOpenDialogWindow: Boolean,
            index: {},
            totalScore: Number
        },
        data: () => {
            return {
                isInputTrue: {
                    isDisabled: false,
                    placeholder: 'Введите кол-во монет...'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    $color-main: rgba(31, 31, 31, 0.145);
    $color-innner: rgb(255, 255, 255);
    $color-shadow: #000;
    $color-gold: gold;
    $color-green: green;
    $color-red: red;

    .modal {
        align-items: center;
        background-color: $color-main;
        display: flex;
        justify-content: center;
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;

        &__inner {
            background-color: $color-innner;
            box-shadow: .2rem .2rem .15rem $color-shadow, .1rem .1rem .2rem $color-shadow;
            height: 25rem;
            padding: 1rem;
            width: 40rem;
            min-width: 20rem;
        }

        &__button-close {
            margin-left: auto;
            transform: rotate(45deg);
            &:hover {
                color: $color-red;
            }
        }
    }
    
    .content {
        &__info {
            font-size: 1.6rem;
            text-transform: uppercase;
        }
        &__controls {
            align-items: center;
            display: flex;
            justify-content: center;
        }
        &__button-increment,
        &__button-decrement {
            font-size: 2.5rem;    
        }
        &__button-increment {
            &:hover {
                color: $color-green;
            }    
        }
        &__button-decrement {
            &:hover {
                color: $color-red;
            }    
        }
        &__coins-score {
            font-size: 3rem;
        }

        &__field {
            margin-top: 3rem;
        }
    }
</style>