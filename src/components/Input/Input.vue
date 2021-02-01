<template>
    <input v-if="isDisabled" 
        class="input input-correct-data_green"
        :class="[isValid ? 'input-correct-data_green' : 'input-uncorrect-data_red']" 
        @input="onChange"
        value=""
        type="text" 
        name="convert-from" 
        placeholder="Введите числовое значение">
    <input v-else 
        class="input input-correct-data_green" 
        :class="[isValid ? 'input-correct-data_green' : 'input-uncorrect-data_red']" 
        @input="onChange"
        value=""
        type="text" 
        name="convert-to" 
        disabled>
</template>

<script>
    
    export default {
        name: 'Input',
        props: {
            name: {
                type: String,
            },
            isDisabled: {
                type: Boolean,
            }
        },
        data: () => {
            return {
                isValid: true,
            }
        },
        methods: {
            onChange(e) {
                const value  = e.target.value;
                const result = this.validationInput(value);

                if (result.flag) {
                    this.isValid = result.flag;
                } 
                else {
                    this.isValid = result.flag;
                    e.target.value = result.value;
                } 

            },
            validationInput(value) {
                if (value.match(/\D/ig, '')) {
                    value = value
                    .split('')
                    .map(item => isFinite(item) ? item.trim() : '')
                    .join('');

                    return { value: value, flag: false };
                }
                else {
                    return { value: value, flag: true };
                }
            }
        }
    }

</script>

<style lang="scss">
    .input {
    border: none;
    border-radius: .1rem;
    font-size: 1.6rem;
    padding: 1rem .75rem;
  }
</style>