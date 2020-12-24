<template>
  <div class="chatbox">
    <div class="chatbox-wrapper">
      <div
        class="chatbox__message chatbox__message--enigma"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum earum omnis harum dolorem labore quo architecto neque quae adipisci, autem, incidunt consequuntur molestiae suscipit aperiam necessitatibus illum blanditiis tempore?</div>
      <div
        class="chatbox__message"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum earum omnis harum dolorem labore quo architecto neque quae adipisci, autem, incidunt consequuntur molestiae suscipit aperiam necessitatibus illum blanditiis tempore?</div>
      <div
        class="chatbox__message chatbox__message--enigma"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum earum omnis harum dolorem labore quo architecto neque quae adipisci, autem, incidunt consequuntur molestiae suscipit aperiam necessitatibus illum blanditiis tempore?</div>
      <div
        class="chatbox__message"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum earum omnis harum dolorem labore quo architecto neque quae adipisci, autem, incidunt consequuntur molestiae suscipit aperiam necessitatibus illum blanditiis tempore?</div>
      <div
        class="chatbox__message chatbox__message--enigma"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum earum omnis harum dolorem labore quo architecto neque quae adipisci, autem, incidunt consequuntur molestiae suscipit aperiam necessitatibus illum blanditiis tempore?</div>
      <div
        class="chatbox__message"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum earum omnis harum dolorem labore quo architecto neque quae adipisci, autem, incidunt consequuntur molestiae suscipit aperiam necessitatibus illum blanditiis tempore?</div>
    </div>
    <input type="text" class="chatbox__input" v-model="input" />
  </div>
</template>
<script>
export default {
  name: 'chatbox',
  data: () => ({
    input: ''
  }),
  methods: {
    inputChange () {
      this.$store.dispatch('watchInput', this.input)
    },
    onKeydown (e) {
      if (e.key.length === 1) this.input += e.key
      console.log(e.key.length)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/fonts";

.chatbox {
  margin: auto;
  width: 504px;
  display: flex;
  flex-direction: column;
  &-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 400px;
    overflow-y: scroll;
  }
  &__message,
  &__input {
    margin: 5px;
    display: inline;
    background: $dark;
    @include fontCode($white, 14px);
    border-radius: 20px;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    align-self: flex-end;
  }
  &__message {
    max-width: 400px;
    &--enigma {
      align-self: flex-start;
      background: $white;
      @include fontCode($black, 14px);
    }
  }
  &__input {
    outline: none;
    border: none;
    width: calc(100% - 40px);
    text-align: right;
  }
}
</style>
