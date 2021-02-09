<template>
    <div class="converter__block" v-if="isDisabled === false">
      <Input 
        :isDisabled="isDisabled" 
        :placeholder="placeholder"
        @input="onHandleConvert"
      />
      <Select 
        :type="type"
        :currencys="currencys" 
        :onHandleSelect="onHandleSelect" 
        :isConvertValue="isConvertValue"
      />
    </div>
    <div class="converter__block" v-else>
      <Input 
        :isDisabled="isDisabled" 
        :placeholder="placeholder" 
        :value="inputResult"
      />
      <Select
        :type="type" 
        :currencys="currencys" 
        :onHandleSelect="onHandleSelect" 
        :isConvertValue="isConvertValue"
      />
    </div>
</template>

<script>
    import Input from '../Input/Input';
    import Select from '../Select/Select';

    export default {
        name: 'ConverterBlock',
        components: {
            Input,
            Select,
        },
        props: {
            isDisabled: Boolean,
            currencys: Object,
            placeholder: String,
            onHandleConvert: Function,
            onHandleSelect: Function,
            isConvertValue: String,
            type: String,
            inputResult: Number,
        }
    }
</script>

<style lang="scss" scoped>

  @media (max-width: 468px) {
    .converter .converter__block {
        max-width: 80%;
    }
  }

  .converter__block {
      max-width: 40rem;
      margin: 2.5rem auto;
  }
</style>