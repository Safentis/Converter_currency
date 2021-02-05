<template>
    <canvas class="diagramm" ref="diagramm">

    </canvas>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: 'Diagramm',
        props: {
            options: Object,
            onDiagrammUpdate: Function,
            score: Array
        },
        data: () => {
            return {
                chart: {},
            }
        },
        methods: {
            diagrammUpdate() {
                const score = this.score;
                const chart = this.chart
                const name  = 'value';
                
                score.map((item, i) => {
                    chart.data.datasets[0].data[i] = item[name];
                })

                this.chart.update();
            },
        },
        mounted() {
            setTimeout(() => {
                const OPTIONS      = this.options;
                const HTML_ELEMENT = this.$refs.diagramm;
                const CTX_ELEMENT  = HTML_ELEMENT.getContext('2d');
    
                const chart = new Chart(CTX_ELEMENT, OPTIONS);
    
                this.chart = chart;
            })
        },
    }
</script>

<style lang="scss" scoped>
    .diagramm {
        margin-top: 5rem;
    }
</style>