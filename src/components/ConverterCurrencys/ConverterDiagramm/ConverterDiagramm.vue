<template>
    <Diagramm 
        :options="options"
        ref="diagram"
    />
</template>

<script>
    import Diagramm from '../../Diagramm/Diagramm';

    export default {
        name: 'ConverterDiagramm',
        components: {
            Diagramm
        },
        props: {
            score: Array,
        },
        data: () => {
            return {
                options: {
                    type: 'line',
                    data: {
                        labels:   [],
                        datasets: []
                    }
                },
            }
        },
        methods: {
            createDiagrammDate(days, n) {
                let labels = this.options.data.labels,
                    date   = new Date(),
                    year   = date.getFullYear(),
                    month  = date.getMonth(),
                    day    = date.getDate();

                for (let i = n; i < days; i++) {
                    let fullDate = new Date(
                        year, 
                        month, 
                        day -= 1
                        ).toLocaleDateString();

                    labels.unshift(fullDate);
                }
            },
            createDiagrammData() {
                let datasets = this.options.data.datasets;

                for (let item of this.score) {
                    let obj = {};
                        obj['label']           = item.name;
                        obj['backgroundColor'] = item.color;
                        obj['borderColor']     = item.color;
                        obj['data']            = item.values.map(item => item[1]);

                        datasets.push(obj);
                }
            }
        },
        mounted() {
            this.createDiagrammDate(14, 0);
            this.createDiagrammData();
        }
    }
</script>