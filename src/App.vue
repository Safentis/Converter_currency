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
      <router-view :currencys="currencys"/>
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
      }
    },
    created: async function() {
      try {

        for await (let url of this.urls) {
          const response = await fetch(url);
          const result   = await response.json();

          const params   = new URL(url);
          const key      = params.searchParams.get('vs_currency');
  
          this.currencys[key] = result;
        }

      } catch (err) {
        console.error(err);
        throw new Error('Error: The bad request');
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

    &__link {
      color: $color-link;
      font-size: 2.2rem;
      font-weight: bold;
      margin: 0 2rem;
      
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
          width: 80%;
          margin: 0 0 0 2.1rem;
        } 
      }
    }
  }
  
</style>
