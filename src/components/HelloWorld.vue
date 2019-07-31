<template>
  <div class="hello">
    <div class="hello_block"></div>
    <div class="hello_block"></div>
    <div class="hello_block"></div>
    <div class="hello_block"></div>
    <div class="hello_block"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  &__block{
    height: 100px;
    width: 100px;
    margin: 20px;
    background: $primary;
  }
}
</style>
