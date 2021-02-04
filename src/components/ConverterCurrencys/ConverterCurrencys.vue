<template>
  <div class="converter">
    <div class="converter__block">
      <Input 
        :isDisabled="isInputFalse.isDisabled" 
        :placeholder="isInputFalse.placeholder" 
        @input="onHandleConvert"
      />
      <Select 
        type="from"
        :currencys="currencys" 
        :onHandleSelect="onHandleSelect" 
        :isConvertValue="isConvertValue.from.name"
      />
    </div>

    <div class="converter__block">
      <Input 
        :isDisabled="isInputTrue.isDisabled" 
        :placeholder="isInputTrue.placeholder" 
        :value="inputResult"
      />
      <Select 
        type="to"
        :currencys="currencys" 
        :onHandleSelect="onHandleSelect" 
        :isConvertValue="isConvertValue.to.name"
      />
    </div>
  </div>
</template>

<script>
  import Input  from '../Input/Input';
  import Select from '../Select/Select';

  export default {
    name: 'Converter',
    data: () => {
      return {
        isInputTrue: { isDisabled: true, placeholder: '' },
        isInputFalse: { isDisabled: false, placeholder: 'Введите значение' },
        isConvertValue: {
          from: {
            name: 'usd',
            currentPrice: 0,
          },
          to: {
            name: 'usd',
            currentPrice: 0,
          }
        },
        inputValue: 1,
        inputResult: 0,
      }
    },
    components: {
      Input,
      Select
    },
    props: {
      currencys: Object
    },
    methods: {
      setCurrencys(fromName, toName) {
        this.currencys[toName].map((item) => {
          if (fromName === item.symbol) {
            this.isConvertValue.from.currentPrice = item.current_price;
          }
          if (toName === item.symbol) {
              this.isConvertValue.to.currentPrice = item.current_price;
          }
        });
      },
      onHandleSelect(event) {
        let selectName = event.target.dataset.name;
        let selectConvert = event.target.dataset.convert;

        this.isConvertValue[selectConvert]['name'] = selectName;

        let fromName = this.isConvertValue.from.name;
        let toName = this.isConvertValue.to.name;
        
        this.setCurrencys(fromName, toName);
        this.onHandleConvert();
      },

      //* Method onHandleConvert([event])
      //* 1 arg is event object (type: Object)
      //* ----------------------------------------------
      //* The method can to handle the convert currencys
      //* The method takes value of the input and convert 
      //* in other currency
      //* ----------------------------------------------

      onHandleConvert(event) {
        
        if (event) {
          let value = event.target.value.replace(/\D/ig, '');
          this.inputValue = value;

          let fromName    = this.isConvertValue.from.name;
          let toName      = this.isConvertValue.to.name;
          
          this.setCurrencys(fromName, toName);
        }
        
        let currentPrice = this.isConvertValue.from.currentPrice;
        let inputValue   = this.inputValue;

        this.inputResult = (currentPrice * inputValue);
        // this.inputResult;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .converter {

    &__block {
      max-width: 40rem;
      margin: 2.5rem auto;
    }
  }
</style>