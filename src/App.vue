<template>
  <nav class="nav">
    <ul class="nav__list container">
      <li class="nav__item">
        <router-link class="nav__link" to="/">Converter</router-link> 
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/briefcase">Briefcase </router-link>
      </li>
    </ul>
  </nav>
  <section class="content">
    <div class="content__body container">
      <router-view v-if="isLoading" 
        :currencys="currencys"
        :score="score" 
        :totalScore="totalScore" 
        :calcTotalScore="calcTotalScore"
        />
      <breeding-rhombus-spinner v-else
        class="content__spiner"
        :animation-duration="2000"
        :size="65"
        color="#000"
      />
    </div>
  </section>
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
        listColors: ['#777', '#444', '#111'],
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
    },

    mounted: async function() {
      this.isLoading = false;
      try {
        for await (let [key, value] of Object.entries(this.listCurrencys)) {
          const responseCurrencys      = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${key}&ids=uniswap-state-dollar%2C%20ethereum%2C%20bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
          const responseCurrencysDaily = await fetch(`https://api.coingecko.com/api/v3/coins/${value}/market_chart?vs_currency=usd&days=14&interval=daily`);
          const resultCurrencys        = await responseCurrencys.json();
          const resultCurrencysDaily   = await responseCurrencysDaily.json();
  
          this.currencys[key] = resultCurrencys;
          this.currencysDaily[key] = resultCurrencysDaily;
        }
        await this.createScoreData();
      }
      catch (error) {
        console.error(error);
      }
      finally {
        this.isLoading = true;
      }
    }
  }
</script>

<style lang="scss" scoped>

  $color-white: #fff;
  $color-link: rgb(70, 70, 70);
  $color-bg: rgba(92, 90, 90, 0.556);

  .container {
    max-width: 114.0rem;
    margin: 0 auto;
  }
  
  .nav {

    &__list {
      display: flex;
      padding: 2.5rem 0;
    }

    &__item:nth-of-type(1n + 2) {
      margin-left: 2rem;
    }
    
    &__link {
      color: $color-link;
      font-size: 2.2rem;
      font-weight: bold;

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
  }
  .content__spiner {
    position: absolute;
    left: 45%;
    top: 45%;
  }
  
</style>
