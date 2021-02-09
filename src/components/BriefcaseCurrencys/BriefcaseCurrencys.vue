<template>
    <div class="briefcase">
        <BriefcaseTotalScore 
            :totalScore="totalScore" 
        />
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
        <Diagramm 
            :options="options"
            :score="score"
            ref="diagramm"
        />
    </div>
</template>

<script>
    import BriefcaseTotalScore from './BriefcaseTotalScore/BriefcaseTotalScore';
    import BriefcaseScore      from './BriefcaseScore/BriefcaseScore';
    import BriefcaseModal      from './BriefcaseModal/BriefcaseModal';
    import Diagramm            from '../Diagramm/Diagramm';

    export default {
        name: 'BriefcaseCurrencys',
        props: {
            currencys: Object,
            score: Array,
            totalScore: Number,
            calcTotalScore: Function,
        },
        components: {
            BriefcaseTotalScore,
            BriefcaseScore,
            BriefcaseModal,
            Diagramm 
        },
        data: () => {
            return {
                isOpenDialogWindow: false,
                index: 0,
                options: {}
            }
        },
        methods: {
            onHandleModal(e) {
                this.isOpenDialogWindow = !this.isOpenDialogWindow;
                this.index = e.target.dataset.button || this.index;
            },
            onScoreIncrement() {
                let index = this.index;
                let score = this.score;

                score[index]['value'] += 1;

                this.calcTotalScore();
                this.$refs.diagramm['diagrammUpdate']();
            },
            onScoreDecrement() {
                let index = this.index;
                let score = this.score;

                score[index]['value'] > 0 
                    ? score[index]['value'] -= 1 
                    : score[index]['value'];

                this.calcTotalScore();
                this.$refs.diagramm['diagrammUpdate']();
            },
            onScoreChange(e) {
                let index = this.index;
                let score = this.score;
                let value = e.target.value.replace(/\D/ig, '');

                score[index]['value'] = +value || 0;

                this.calcTotalScore();
                this.$refs.diagramm['diagrammUpdate']();
            },
            diagrammData(name) {
                const score = this.score;
                const data  = [];

                score.map(item => {
                    (item[name])
                        ? data.push(item[name])
                        : data.push(0);
                });

                return data;
            },
            diagrammSetOptions() {
                const options = {
                    type: 'bar',
                    data: {
                        labels: this.diagrammData('name'),
                        datasets: [{
                            data: this.diagrammData('value'),
                            label: 'Распределение валют в портфеле'
                        }],
                    }
                }

                this.options = options;
            },
        },
        mounted() {
            this.diagrammSetOptions();
        },
    }
</script>