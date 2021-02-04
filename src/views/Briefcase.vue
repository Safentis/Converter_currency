<template>
  <BriefcaseCurrencys :currencys="currencys" :score="score" :totalScore="totalScore" :calcTotalScore="calcTotalScore"/>
</template>

<script>
  import BriefcaseCurrencys from '../components/BriefcaseCurrencys/BriefcaseCurrencys';

  export default {
    name: 'Briefcase',
    components: {
      BriefcaseCurrencys
    },
    props: {
      currencys: Object,
      score: Array,
      totalScore: Number,
      calcTotalScore: Function,
    },
  }
</script>