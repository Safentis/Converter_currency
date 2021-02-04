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
      <router-view v-if="isLoading" :currencys="currencys" :score="score" :totalScore="totalScore" :calcTotalScore="calcTotalScore"/>
      <div v-else>
        isLoading
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => {
      return {
        urls: [
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=uniswap-state-dollar%2C%20ethereum%2C%20bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false',
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&ids=uniswap-state-dollar%2C%20ethereum%2C%20bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false',
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eth&ids=uniswap-state-dollar%2C%20ethereum%2C%20bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false',
        ],
        currencys: {},
        score: [],
        totalScore: 0,
        isLoading: true,
      }
    },
    methods: {
      //* Method createScoreData()
      //* -------------------------------

      createScoreData() {
        let currencys = this.currencys; 
        let score = this.score;

        currencys.usd.map(item => {
          score.push({
            value: 0,
            name: item.symbol,
            currentPrice: item.current_price,
            icon: item.image,
          });
        });
      },

      //* Method calcTotalScore()
      //* -------------------------------

      calcTotalScore() {
        let score = this.score;
        let count = 0;
        
        score.forEach(item => {
            count += (+item.value * item.currentPrice);
        });

        this.totalScore = count;
      },
    },

    //* The Block of the Handle Request
    //* -------------------------------

    //* -------------------------------
    //* Events of the Life Cycle

    created: async function() {
      try {
        this.isLoading = false;

        for await (let url of this.urls) {
          let response = await fetch(url);
          let result   = await response.json();
          let params   = new URL(url);
          let key      = params.searchParams.get('vs_currency');
  
          this.currencys[key] = result;
        }
        
        await this.createScoreData();

      } catch (err) {
        console.err(err);
      } finally {
        this.isLoading = true;
      }
    }
  }
</script>

<style lang="scss">

  //* Main style options
  //* ----------------------

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  
  //* ----------------------

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
  
</style>
