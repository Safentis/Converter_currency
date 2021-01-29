<template>
  <main class="main">
    <div class="nav main__nav">
      <router-link class="nav__item" to="/">Converter</router-link> 
      <router-link class="nav__item" to="/briefcase">Briefcase </router-link>
      <router-view />
    </div>
  </main>
</template>

<style lang="scss">

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .nav {

    &__item {
      color: #2c3e50;
      font-size: 2.2rem;
      font-weight: bold;
      margin: 0 1rem;

      &.router-link-exact-active {
        color: #40aabd;
      }
    }
  }
  
</style>
