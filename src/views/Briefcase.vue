<template>
  <div class="briefcase">
    <BriefcaseCurrency 
      :currencys="currencys"
      :operationOnWindow="operationOnWindow"
      :score="score"
      :totalScore="totalScore"
    />
    <BriefcaseDiagramm 
      :score="score"
    />
    <DialogWindow 
      :currencys="currencys"
      :operationOnWindow="operationOnWindow" 
      :score="score"
      :scoreIncrement="scoreIncrement"
      :scoreDecrement="scoreDecrement"
      :scoreChange="scoreChange"
      :isOpenDialogWindow="isOpenDialogWindow"
      :index="index" 
    />
  </div>
</template>

<script>
  import BriefcaseCurrency from '../components/BriefcaseCurrency/BriefcaseCurrency';
  import BriefcaseDiagramm from '../components/BriefcaseDiagramm/BriefcaseDiagramm';
  import DialogWindow      from '../components/DialogWindow/DialogWindow';

  export default {
    name: 'Briefcase',
    components: {
      BriefcaseCurrency,
      BriefcaseDiagramm,
      DialogWindow,
    },
    props: {
      currencys: Object,
    },
    data: () => {
      return {
        score: [],
        totalScore: 0,
        isOpenDialogWindow: false,
        index: 0,
      }
    },
    methods: {
      operationOnWindow(e) {
        this.isOpenDialogWindow = !this.isOpenDialogWindow;
        this.index = e.target.dataset.button || this.index;
      },
      scoreIncrement() {
        let index = this.index;
        let score = this.score;

        score[index]['value'] += 1;

        this.calcTotalScore();
      },
      scoreDecrement() {
        let index = this.index;
        let score = this.score;

        score[index]['value'] > 0 ? score[index]['value'] -= 1 : score[index]['value'];

        this.calcTotalScore();
      },
      scoreChange(e) {
        let index = this.index;
        let score = this.score;
        let value = +e.target.value;

        score[index]['value'] = value || 0;

        this.calcTotalScore();
      },
      calcTotalScore() {
        let score = this.score;
        let count = 0;
        
        score.forEach(item => {
          count += (+item.value * item.currentPrice);
        });

        this.totalScore = count;
      }
    },
    created: function() {
      let currencys = this.currencys;
      let score     = this.score;

      currencys.usd.forEach(item => {
        score.push({
          value: 0,
          name: item.symbol,
          currentPrice: item.current_price,
        });
      })
    }
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