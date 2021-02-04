<template>
  <ConverterCurrencys :currencys="currencys"/>
</template>

<script>
  import ConverterCurrencys from '../components/ConverterCurrencys/ConverterCurrencys';

  export default {
    name: 'Converter',
    components: {
      ConverterCurrencys
    },
    props: {
      currencys: Object
    },
  }
</script>