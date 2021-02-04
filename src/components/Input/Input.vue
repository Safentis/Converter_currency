<template>
    <input class="input input_correct" type="text" 
        :class="[isValid ? '' : 'input_uncorrect']" 
        :disabled="isDisabled"
        :placeholder="placeholder"
        v-model="message"
        maxlength="9"
        @input="onHandleInput"
    />
</template>

<script>
    export default {
        name: 'Input',
        props: {
            isDisabled: Boolean,
            placeholder: String,
        },
        data: () => {
            return {
                message: '',
                isValid: true,
            }
        },
        methods: {
            onHandleInput() {
                const inputValue = this.message;
                const inputValidation = this.onValidationInput(inputValue);

                if (inputValidation.flag) {
                    this.isValid = inputValidation.flag;
                }
                else {
                    this.isValid = inputValidation.flag;
                    this.message = inputValidation.inputValue;
                }
            },
            onValidationInput(inputValue) {
                
                if (inputValue.match(/\D/ig, '')) {
                    inputValue = inputValue
                    .split('')
                    .map((item) => {
                        return isFinite(item) 
                            ? item.trim() 
                            : '';
                    })
                    .join('');

                    return { inputValue, flag: false };
                }
                else {
                    return { inputValue, flag: true };
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $color-grey: #888;
    $color-dark-grey: #777;
    $color-black: #000;
    $color-green: green;
    $color-red: red;

    .input {
        border: none;
        border-radius: .25rem;
        font-size: 1.6rem;
        padding: 1rem .75rem;
        width: 100%;

        &_correct {
            box-shadow: .0rem .0rem .1rem $color-grey, .0rem .1rem .1rem $color-dark-grey;
            &:focus {
                outline: none;
                box-shadow: .0rem .0rem .1rem $color-green, .0rem .1rem .1rem $color-green;
            }
        }

        &_uncorrect {
            box-shadow: .0rem .0rem .1rem $color-green, .0rem .1rem .1rem $color-green;
            &:focus {
                outline: none;
                box-shadow: .0rem .0rem .1rem $color-red, .0rem .1rem .1rem $color-red;
            }
        }
    }
</style>