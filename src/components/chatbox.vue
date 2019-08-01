<template>
  <div class="chatbox">
    <div class="chatbox__message">kjvke, weravc</div>
    <div class="chatbox__message">hello, enigma</div>

    <input type="text" class="chatbox__input">
  </div>
</template>
<script>
export default {
  name: 'chatbox'
}
</script>
<style lang="scss">
.chatbox{
  margin: auto;
  margin-top: 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  &__message, &__input{
    margin: 5px;
    display: inline;
    background: $dark;
    @include fontCode($white,14px);
    border-radius:8px; 
    padding: 10px;
  }
  &__message{
    
    max-width: 400px;
    text-align: right;
  }
  &__input{
    outline: none;
    border: none;
  }
}
</style>
