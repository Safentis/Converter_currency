<template>
  <div class="content" v-if="isLoading">
    <nav class="nav content__nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/">
            Конвертёр
          </router-link> 
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/briefcase">
            Портфель
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view 
      :currencys="currencys"
      :score="score" 
      :totalScore="totalScore" 
      :calcTotalScore="calcTotalScore"
      />
  </div>
  <breeding-rhombus-spinner v-else
    class="spiner"
    :animation-duration="2000"
    :size="65"
    color="#000"
  />
</template>

<script>
  import { BreedingRhombusSpinner } from 'epic-spinners'

  export default {
    components: {
      BreedingRhombusSpinner
    },
    data: () => {
      return {
        listCurrencys: {
          btc: 'bitcoin',
          eth: 'ethereum',
          usd: 'uniswap-state-dollar',
        },
        listColors: [
          '#777', 
          '#444', 
          '#111'
        ],
        currencys: {},
        currencysDaily: {}, 
        score: [],
        totalScore: 0,
        isLoading: true,
      }
    },
    methods: {
      createScoreData() {
        this.currencys.usd.map((item, i) => {
          let values = this.currencysDaily[item.symbol]['prices'];
          let color  = this.listColors[i]

          this.score.push({
            value: 0,
            values:values,
            name: item.symbol,
            currentPrice: item.current_price,
            icon: item.image,
            color: color
          });
        });
      },
      calcTotalScore() {
        let score = this.score;
        let count = 0;
        
        score.map(item => {
            count += (+item.value * item.currentPrice);
        });

        this.totalScore = count;
      },
      loadingOn() {
        this.isLoading = false;
      },
      loadingOff() {
        this.isLoading = true;
      }
    },

    mounted: async function() {
      const listCurrencys = Object.entries(this.listCurrencys);

      this.loadingOn();
      try {
        for await (let [key, value] of listCurrencys) {
          const responseCurrencys      = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${key}&ids=uniswap-state-dollar%2C%20ethereum%2C%20bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
          const responseCurrencysDaily = await fetch(`https://api.coingecko.com/api/v3/coins/${value}/market_chart?vs_currency=usd&days=14&interval=daily`);
          const resultCurrencys        = await responseCurrencys.json();
          const resultCurrencysDaily   = await responseCurrencysDaily.json();
  
          this.currencys[key]      = resultCurrencys;
          this.currencysDaily[key] = resultCurrencysDaily;
        }
        await this.createScoreData();
      }
      catch (error) {
        console.error(error);
      }
      finally {
        this.loadingOff();
      }
    }
  }
</script>

<style lang="scss" scoped>

  $color-light-grey: #999;
  $color-white: #fff;
  $color-link: rgb(70, 70, 70);
  $color-bg: rgba(92, 90, 90, 0.556);

  .spiner {
    position: absolute;
    left: 43.5%;
    top: 43.5%;
  }

  @media (max-width: 768px) {
    .content {
      max-width: none;
    }
    .nav__list {
      justify-content: center;  
    }
  }

  .content {
    background-color: $color-white;
    box-shadow: 
      .1rem .1rem .25rem $color-light-grey, 
      -.1rem -.1rem .25rem $color-light-grey;
    border-radius: .5rem;
    max-width: 114.0rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
  }
  
  .nav__list {
    display: flex;
    flex-wrap: wrap;
    padding: 2.5rem 0;
  }

  .nav__item {
    margin: .5rem 1rem .5rem 0;
  }

  .nav__link {
    color: $color-link;
    font-size: 2.2rem;
    font-weight: bold;
  }

  .nav__link {
    &::after {
      content: '';
      background-color: $color-link;
      display: block;
      height: .2rem;
      margin: 0 auto;
      width: 0;
    }

    &.router-link-exact-active {
      color: $color-link;

      &::after {
        content: '';
        transition: .7s;
        width: 100%;
      } 
    }
  }
</style>
