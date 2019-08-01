<template>
  <div class="keyboard">
    <div class="keyboard__row" v-for="row in kb" v-bind:key="row">
      <div class="keyboard__key" v-for="key in row" v-bind:key="key" v-bind:class="key.class" @click="log(key)">{{key.key}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keyboard',
  props: {
    msg: String
  },
  data: () => ({
    kb: [
      [
        {key:'q',class:''},
        {key:'w',class:''},
        {key:'e',class:''},
        {key:'r',class:''},
        {key:'t',class:''},
        {key:'z',class:''},
        {key:'u',class:''},
        {key:'i',class:''},
        {key:'o',class:''},
      ], [
        {key:'a',class:''},
        {key:'s',class:''},
        {key:'d',class:''},
        {key:'f',class:''},
        {key:'g',class:''},
        {key:'h',class:''},
        {key:'j',class:''},
        {key:'k',class:''},
      ], [
        {key:'p',class:''},
        {key:'y',class:''},
        {key:'x',class:''},
        {key:'c',class:''},
        {key:'v',class:''},
        {key:'b',class:''},
        {key:'n',class:''},
        {key:'m',class:''},
        {key:'l',class:''},
      ]
    ]
  }),
  methods: {
    log(e){
      console.log(e);
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.keyboard{
  display: flex;
  flex-direction: column;
  align-items: center;
  &__row{
    display: flex;
    flex-direction: row;
  }
  &__key{
    height: 50px;
    width: 50px;
    background: $dark;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    @include fontCode($white,40px);
    &--click{
      background: $primary;
    }
    &:active{
      background: $primary;

    }
  }
}
</style>
