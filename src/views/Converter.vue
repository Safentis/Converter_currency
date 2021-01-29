<template>
  <!-- Разить на более мелкие компоненты -->

  <div class="converter converter-mrg">
    <label class="label converter__label">
      <span class="label__text">Конвертируемое значение:</span>
      <input class="input converter__input input-correct-data_green" type="text" name="convert-from" placeholder="Введите числовое значение">
    </label>
    <label class="label converter__label">
      <span class="label__text">Результат:</span>
      <input class="input converter__input input-correct-data_green" type="text" name="convert-to" disabled>
    </label>
  </div>

  <div class="schedule">
    график курса за последние 14 дней
  </div>
</template>

<script>

  export default {
    name: 'Converter',
  }
  
</script>

<style lang="scss">

  $color-grey: #888;
  $color-dark-grey: #777;
  $color-black: #000;
  $color-green: green;
  $color-red: red;

  .converter {

    &__label {
      display: flex;
      flex-direction: column;
      margin: 2rem auto;
      max-width: 40rem;
    }
  }

  .converter-mrg {
    margin-top: 10rem;
  }

  .input {
    border: none;
    border-radius: .1rem;
    font-size: 1.6rem;
    padding: 1rem .75rem;
  }


  // При вводе коректных данных
  .input-correct-data_green {
    box-shadow: .0rem .0rem .1rem $color-grey, .0rem .1rem .1rem $color-dark-grey;
    &:focus {
      outline: none;
      box-shadow: .0rem .0rem .1rem $color-green, .0rem .1rem .1rem $color-green;
    }
  }

  // При вводе некоректных данных
  .input-uncorrect-data_red {
    box-shadow: .0rem .0rem .1rem $color-green, .0rem .1rem .1rem $color-green;
    &:focus {
      outline: none;
      box-shadow: .0rem .0rem .1rem $color-red, .0rem .1rem .1rem $color-red;
    }
  }

  .label {
    font-size: 2rem;
    
    &__text {
      margin-bottom: 1rem;
      text-align: left;
    }
  }

</style>