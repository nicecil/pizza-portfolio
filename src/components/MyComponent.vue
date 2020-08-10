<template>
  <div class="content">
    <div class="first-content">
      <img class="icon-test" src="https://travelpedia.com.br/wp-content/uploads/2017/11/pizza-icon-300x300.png" />
      <div class="text-main">João Capelletto</div>
    </div>
    <div class="second-content">
      <h4>Sem tempo, irmão</h4>
    </div>

  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
  }
};
</script>
<style scoped lang="scss">
.content {

  .first-content {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-test {
      width: 100px;
    }

    .text-main {
      font-size: 4em;
    }
  }

  .second-content {
    font-weight: 100;
    font-size: 1em;
  }
}
</style>
