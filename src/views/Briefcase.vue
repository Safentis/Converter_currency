<template>
  <div class="briefcase">
    <BriefcaseCurrency />
    <BriefcaseDiagramm />
  </div>
</template>

<script>
  import BriefcaseCurrency from '../components/BriefcaseCurrency/BriefcaseCurrency';
  import BriefcaseDiagramm from '../components/BriefcaseDiagramm/BriefcaseDiagramm';

  export default {
    name: 'Briefcase',
    components: {
      BriefcaseCurrency,
      BriefcaseDiagramm,
    },
  }

</script>

<style lang="scss">
  .briefcase {
    display: grid;
    grid-template-columns: 1fr;

    &__score {

    }

    &__currency {
      
    }
    
    &__diagramm {

    }
  }
</style>