<template>
  <div class="chatbox">
    <div class="chatbox-wrapper">
      <div class="chatbox__message chatbox__message--enigma">kjvke, weravc</div>
      <div class="chatbox__message">hello, enigma</div>
      <div class="chatbox__message chatbox__message--enigma">kjvke, weravc</div>
      <div class="chatbox__message">hello, enigma</div>
      <div class="chatbox__message chatbox__message--enigma">kjvke, weravc</div>
      <div class="chatbox__message">hello, enigma</div>
    </div>
    <input type="text" class="chatbox__input" />
  </div>
</template>
<script>
export default {
  name: "chatbox"
};
</script>
<style lang="scss">
.chatbox {
  margin: auto;
  margin-top: 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  &-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 200px;
    overflow-y: scroll;
  }
  &__message,
  &__input {
    margin: 5px;
    display: inline;
    background: $dark;
    @include fontCode($white, 14px);
    border-radius: 20px;
    text-align: right;
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
  }
}
</style>
