<template>
    <div class="briefcase">
        <BriefcaseScore :score="score" :totalScore="totalScore" :onHandleModal="onHandleModal"/>
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
    </div>
    <canvas class="diagramm" ref="diagramm">

    </canvas>
</template>

<script>
    import BriefcaseScore    from './BriefcaseScore/BriefcaseScore';
    import BriefcaseModal    from './BriefcaseModal/BriefcaseModal';
    import Chart             from 'chart.js';

    export default {
        name: 'BriefcaseCurrencys',
        props: {
            currencys: Object,
        },
        components: {
            BriefcaseScore,
            BriefcaseModal
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
            diagrammId() {
                return this.$refs.diagramm;
            },
            diagrammData(name) {
                let data = [];

                this.score.map(item => {
                    if (item[name]) {
                        data.push(item[name]);
                    }
                });

                return data;
            },
            diagrammMoutned() {
                let root = this.diagrammId();
                let data = this.diagrammData('value');
                let labels = this.diagrammData('name');
                let ctx = root.getContext('2d');

                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            backgroundColor: 'red',
                            barPercentage: 2,
                            barThickness: 6,
                            maxBarThickness: 8,
                            minBarLength: 2,
                            data: data,
                            label: 'Распределение валют'
                        }],
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                stacked: true
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }
                    }
                });
            },

            onHandleModal(e) {
                this.isOpenDialogWindow = !this.isOpenDialogWindow;
                this.index = e.target.dataset.button || this.index;
            },
            onScoreIncrement() {
                let index = this.index;
                let score = this.score;

                score[index]['value'] += 1;

                this.calcTotalScore();
            },
            onScoreDecrement() {
                let index = this.index;
                let score = this.score;

                score[index]['value'] > 0 ? score[index]['value'] -= 1 : score[index]['value'];

                this.calcTotalScore();
            },
            onScoreChange(e) {
                let index = this.index;
                let score = this.score;
                let value = e.target.value.replace(/\D/ig, '');

                score[index]['value'] = +value || 0;

                this.calcTotalScore();
            },
            calcTotalScore() {
                let score = this.score;
                let count = 0;
                
                score.forEach(item => {
                count += (+item.value * item.currentPrice);
                });

                this.totalScore = count;
                this.diagrammMoutned();
            },
        },
        created: function() {
            let currencys; 
            let score;     
            
            setTimeout(() => {
                currencys = this.currencys;
                score     = this.score;

                currencys.usd.map(item => {
                    score.push({
                        value: 0,
                        name: item.symbol,
                        currentPrice: item.current_price,
                        icon: item.image,
                    });
                });
            }, 0);
        },
        mounted() {
            this.diagrammMoutned();
        },
}
</script>

<style lang="scss" scoped>
    .diagramm {
        margin-top: 5rem;
    }
</style>