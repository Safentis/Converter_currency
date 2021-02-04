<template>
    <div class="briefcase" ref="briefcase">
        <BriefcaseScore 
            :score="score" 
            :totalScore="totalScore" 
            :onHandleModal="onHandleModal"
        />
        <BriefcaseModal 
            :currencys="currencys"
            :score="score"
            :onHandleModal="onHandleModal"
            :onScoreIncrement="onScoreIncrement"
            :onScoreDecrement="onScoreDecrement"
            :onScoreChange="onScoreChange"
            :isOpenDialogWindow="isOpenDialogWindow"
            :index="index"
            :totalScore="totalScore"
        />
        <BriefcaseDiagramm 
            :score="score" 
            ref="diagramm"
        />
    </div>
</template>

<script>
    import BriefcaseScore    from './BriefcaseScore/BriefcaseScore';
    import BriefcaseModal    from './BriefcaseModal/BriefcaseModal';
    import BriefcaseDiagramm from './BriefcaseDiagramm/BriefcaseDiagramm';

    export default {
        name: 'BriefcaseCurrencys',
        props: {
            currencys: Object,
            score: Array,
            totalScore: Number,
            calcTotalScore: Function,
        },
        components: {
            BriefcaseScore,
            BriefcaseModal,
            BriefcaseDiagramm
        },
        data: () => {
            return {
                isOpenDialogWindow: false,
                index: 0,
            }
        },
        methods: {
            //* Hanle of the currencys
            //* ----------------------

            onHandleModal(e) {
                this.isOpenDialogWindow = !this.isOpenDialogWindow;
                this.index = e.target.dataset.button || this.index;
            },
            onScoreIncrement() {
                let index = this.index;
                let score = this.score;

                score[index]['value'] += 1;

                this.updateDataView();
            },
            onScoreDecrement() {
                let index = this.index;
                let score = this.score;

                score[index]['value'] > 0 ? score[index]['value'] -= 1 : score[index]['value'];

                this.updateDataView();
            },
            onScoreChange(e) {
                let index = this.index;
                let score = this.score;
                let value = e.target.value.replace(/\D/ig, '');

                score[index]['value'] = +value || 0;

                this.updateDataView();
            },
            updateDataView() {
                this.calcTotalScore();
                this.$refs.diagramm['diagrammUpdate']();
            }
        },
    }
</script>