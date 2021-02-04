<template>
  <BriefcaseCurrencys :currencys="currencys"/>
</template>

<script>
  import BriefcaseCurrencys from '../components/BriefcaseCurrencys/BriefcaseCurrencys';

  export default {
    name: 'Briefcase',
    props: {
      currencys: Object,
    },
    components: {
      BriefcaseCurrencys
    }
  }
</script>