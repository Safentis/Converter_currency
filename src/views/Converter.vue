<template>
  <ConvertedInputs />
  <ConverterGraph />
</template>

<script>
  import ConvertedInputs from '../components/ConverterInputs/ConvertedInputs';
  import ConverterGraph from '../components/ConverterGraph/ConverterGraph';

  export default {
    name: 'Converter',
    components: {
      ConvertedInputs,
      ConverterGraph
    },
  }
  
</script>

<style lang="scss">

 

</style>