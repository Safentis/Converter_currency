<template>
  <div class="converter">
    <ConverterBlock 
      :isDisabled="isInputFalse.isDisabled" 
      :placeholder="isInputFalse.placeholder" 
      :onHandleConvert="onHandleConvert"

      :type="'from'"
      :currencys="currencys" 
      :onHandleSelect="onHandleSelect" 
      :isConvertValue="isConvertValue.from.name"
    
    />
    <ConverterBlock 
      :isDisabled="isInputTrue.isDisabled" 
      :placeholder="isInputTrue.placeholder" 
      :inputResult="inputResult"

      :type="'to'"
      :currencys="currencys" 
      :onHandleSelect="onHandleSelect" 
      :isConvertValue="isConvertValue.to.name"
    />
    <ConverterDiagramm :score="score"/>
  </div>
</template>

<script>
  import ConverterBlock    from './ConverterBlock';
  import ConverterDiagramm from './ConverterDiagramm/ConverterDiagramm';

  export default {
    name: 'Converter',
    components: {
      ConverterDiagramm,
      ConverterBlock
    },
    props: {
      currencys: Object,
      score: Array
    },
    data: () => {
      return {
        isInputTrue: { 
          isDisabled: true, 
          placeholder: '' 
        },
        isInputFalse: { 
          isDisabled: false, 
          placeholder: 'Введите значение' 
        },
        // isConvertValue contains value         
        // about of the current price         
        // and type sellected currency   
        isConvertValue: {
          from: {
            name: 'usd',
            currentPrice: 0,
          },
          to: {
            name: 'btc',
            currentPrice: 0,
          }
        },
        inputValue: 1,
        inputResult: 0,
      }
    },
    methods: {

      //* Method setCurrencys(fromName, toName)
      //* 1 arg is the string fromName (type: Stryng)
      //* 2 arg is the string toName   (type: Stryng)
      //* ----------------------------------------------
      //* The method checkes values of the object is isConvertValue  
      //* and set values with current price of a coin  
      //* ----------------------------------------------

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

      //* Method onHandleSelect(event)
      //* 1 arg is event object (type: Object)
      //* ----------------------------------------------
      //* The method can to handle select field
      //* The method takes value of the select element and set him 
      //* in object isConvertValue and call both methods setCurrencys and 
      //* call both methods setCurrencys and onHandleConvert 
      //* ----------------------------------------------

      onHandleSelect(event) {
        let selectName    = event.target.dataset.name;
        let selectConvert = event.target.dataset.convert;

        this.isConvertValue[selectConvert]['name'] = selectName;

        let fromName = this.isConvertValue.from.name;
        let toName   = this.isConvertValue.to.name;
        
        this.setCurrencys(fromName, toName);
        this.onHandleConvert();
      },

      //* Method onHandleConvert([event])
      //* 1 arg is event object (type: Object)
      //* ----------------------------------------------
      //* The method can to handle the convert currencys
      //* The method takes value of the input and convert 
      //* in other currency, and calc course of coins. The method call other method
      //* by name the setCurrencys
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
      },
    },
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