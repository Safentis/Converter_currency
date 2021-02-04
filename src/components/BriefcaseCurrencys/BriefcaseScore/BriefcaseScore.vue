<template>
    <section class="coins">
        <p class="coins__score">{{ totalScore.toFixed(4) }} 
            <span class="coins__score-sign"> $ </span>
        </p>
        <ul class="coins__list">
            <li class="coins__item" v-for="(item, i) of score" :key="i">
                <p class="coins__name">{{ item.name }}</p>
                <img class="coins__icon" 
                    :src="item.icon" 
                    :alt="item.name" 
                    height="25" 
                    width="25"
                >
                <p class="coins__count">{{ item.value }}</p>
                <p class="coins__price">{{ item.currentPrice }}</p>
                <Button 
                    className="coins__button" 
                    content="+" 
                    :onHandleButton="onHandleModal" 
                    :attr="i"
                />
            </li>
        </ul>
    </section>
</template>

<script>
    import Button from '../../Button/Button';

    export default {
        name: 'BriefcaseScore',
        components: {
            Button,
        },
        props: {
            score: Array,
            totalScore: Number,
            onHandleModal: Function,
        }
    }
</script>

<style lang="scss" scoped>
    $color-grey: rgb(192, 191, 190);
    $color-grey-666: #666;
    $color-grey-999: #999;
    $color-grey-555: #555;
    $color-white: #fff;
    $color-black: #000;
    $color-green: green;

    .coins {
        &__score {
            font-size: 2.5rem;
            position: absolute;
            right: 2rem;
            top: 2rem;
        }

        &__score-sign {
            color: $color-green;
        }

        &__list {
            display: grid;
            grid-template-columns: repeat(3, 25rem);
            grid-gap: 1rem;
        }

        &__item {
            align-items: center;
            background: linear-gradient(30deg, $color-grey-666, $color-grey-999);            
            box-shadow: .15rem .15rem .2rem $color-grey-555, -.1rem -.1rem .15rem $color-grey-555;
            color: $color-white;
            cursor: pointer;
            display: grid;
            grid-template: 
            'i n'
            'i n'
            'c p'
            'c p'
            'b b'
            ;
            justify-content: stretch;
            padding: 2rem 1rem;
            position: relative;
            transition: .35s;

            &:hover {
                background: linear-gradient(30deg, $color-grey-666 35%, $color-grey-999 100%);
                box-shadow: .15rem .15rem .2rem $color-black, -.1rem -.1rem .15rem $color-grey-555;
                color: $color-grey;
                transform: translateY(-.2rem);

                & > .coins__button {
                    transition: .2s;
                    visibility: visible;
                }  
            }
        }

        &__name {
            grid-template-areas: n;
            font-size: 2rem;
            font-weight: bold;
            text-transform: uppercase;
        }

        &__icon {
            justify-self: center;
            margin: 1rem;
            grid-template-areas: i;
        }

        &__count {
            grid-template-areas: c;
            font-size: 2rem;
        }

        &__price {
            font-size: 2rem;
            grid-template-areas: p;
        }

        &__button {
            color: $color-grey;
            grid-template-areas: b;
            position: absolute;
            top: 2%;
            left: 2%;
            font-size: 3rem;
            visibility: hidden;
        }
    }
</style>