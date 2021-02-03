<template>
    <div class="converter">
        <label class="label converter__label">
            <span class="label__text">Конвертируемое значение:</span>
            <Input :isDisabled="inputActive" @input="handleInput"/>
            <Select :currencys="currencys" convert="from" :selectMethod="handleSelect" :active="from.name"/>
        </label>
        <label class="label converter__label">
            <span class="label__text">Результат:</span>
            <Input :isDisabled="inputDisabled" :value="result"/>
            <Select :currencys="currencys" convert="to" :selectMethod="handleSelect" :active="to.name"/>
        </label>
    </div>
</template>

<script>
    import Input from '../Input/Input';
    import Select from '../Select/Select';

    export default {
        name: 'ConvertedInputs',
        components: {
            Input,
            Select
        },
        props: {
            currencys: Object
        },
        data: () => {
            return {
                inputActive: true,
                inputDisabled: false,
                inputValue: '1',
                
                from: {
                    name: 'usd',
                    currentPrice: 0,
                },
                to: {
                    name: 'usd',
                    currentPrice: 0
                },
                
                result: 0,
            }
        },
        methods: {
            handleSelect(event) {
                const name    = event.target.dataset.name;
                const convert = event.target.dataset.convert;
                
                this[convert].name = name;

                const fromName = this.from.name;
                const toName   = this.to.name;
                
                this.currencys[toName].map(item => {
                    if (fromName === item.symbol) {
                        this.from.currentPrice = item.current_price;
                    }
                    if (toName === item.symbol) {
                        this.to.currentPrice = item.current_price;
                    }
                });

                this.handleInput()
            },
            handleInput(event) {

                if (event) {
                    let value = event.target.value
                    this.inputValue = value;
                }

                let price = this.from.currentPrice;
                let value = this.inputValue;

                this.result = (price * value);
            },
        },
    }
</script>

<style lang="scss">

    $color-grey: #888;
    $color-dark-grey: #777;
    $color-black: #000;
    $color-green: green;
    $color-red: red;

    .converter {

        &__label {
            display: flex;
            flex-direction: column;
            margin: 2rem auto;
            max-width: 40rem;
        }
    }

    .converter-mrg {
        margin-top: 10rem;
    }

    .input {
        border: none;
        border-radius: .1rem;
        font-size: 1.6rem;
        padding: 1rem .75rem;
    }

    // При вводе коректных данных
    .input-correct-data_green {
        box-shadow: .0rem .0rem .1rem $color-grey, .0rem .1rem .1rem $color-dark-grey;
        &:focus {
        outline: none;
        box-shadow: .0rem .0rem .1rem $color-green, .0rem .1rem .1rem $color-green;
        }
    }

    // При вводе некоректных данных
    .input-uncorrect-data_red {
        box-shadow: .0rem .0rem .1rem $color-green, .0rem .1rem .1rem $color-green;
        &:focus {
        outline: none;
        box-shadow: .0rem .0rem .1rem $color-red, .0rem .1rem .1rem $color-red;
        }
    }

    .label {
        font-size: 2rem;
        
        &__text {
        margin-bottom: 1rem;
        text-align: left;
        }
    }
</style>