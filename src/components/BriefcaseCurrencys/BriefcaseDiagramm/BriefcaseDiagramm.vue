<template>
    <canvas class="diagramm" ref="diagramm">

    </canvas>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: 'BriefcaseDiagramm',
        props: {
            score: Array,
        },
        data: () => {
            return {
                chart: {},
            }
        },
        methods: {
            diagrammUpdate() {
                const score = this.score;
                const chart = this.chart;
                
                score.map((item, i) => {
                    chart.data.datasets[0].data[i] = item.value;
                });
                
                chart.update();
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
            diagrammMoutned() {
                let diagramm = this.$refs.diagramm;
                let ctx      = diagramm.getContext('2d');
                let data     = this.diagrammData('value');
                let labels   = this.diagrammData('name');

                const chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            maxBarThickness: 100,
                            label: 'Распределение валют'
                        }],
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                offset: true,
                                stacked: false
                            }],
                            yAxes: [{
                                stacked: false
                            }]
                        }
                    }
                });

                this.chart = chart;
            },
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