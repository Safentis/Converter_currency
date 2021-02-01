<template>
  <main class="container">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/">Converter</router-link> 
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/briefcase">Briefcase </router-link>
        </li>
      </ul>
      <BriefcaseScore :score="score" :operationOnWindow="operationOnWindow"/>
    </nav>
    <div>
      <DialogWindow :isOpenDialogWindow="isOpenDialogWindow" :operationOnWindow="operationOnWindow"/>
      <router-view />
    </div>
  </main>
</template>

<script>
  import BriefcaseScore from './components/BriefcaseScore/BriefcaseScore';
  import DialogWindow from './components/DialogWindow/DialogWindow';

  export default {
    components: {
      BriefcaseScore,
      DialogWindow
    },
    data: () => {
      return {
        score: 100,
        isOpenDialogWindow: false,
      }
    },
    methods: {
      operationOnWindow() {
        this.isOpenDialogWindow = !this.isOpenDialogWindow;
      }
    }
  }
</script>

<style lang="scss">

  $color-white: #fff;
  $color-link: rgb(70, 70, 70);
  $color-bg: rgb(190, 186, 186), rgb(189, 176, 176);

  //* Main style options
  //* ----------------------

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

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color-white;
    background: linear-gradient(to left, $color-bg);
  }
  
  //* ----------------------


  .container {
    padding: 1rem;
    max-width: 114.0rem;
    margin: 0 auto;
  }
  
  .nav {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    &__link {
      color: $color-white;
      font-size: 2.2rem;
      font-weight: bold;
      margin: 0 1rem;
      
      &::after {
          content: '';
          background-color: $color-white;
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
          width: 90%;
          margin: 0 0 0 1rem;
        } 
      }
    }

    &__list {
      display: flex;
    }
  }
  
</style>
