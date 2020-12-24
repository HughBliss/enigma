<template>
  <div class="row">
    <div class="col">
      <chatbox></chatbox>
      <lampboard></lampboard>
      <keyboard msg="Welcome to Your Vue.js App"></keyboard>
    </div>
    <div class="col">
      <select-type></select-type>
      <rotors></rotors>
    </div>
  </div>
</template>

<script>
import keyboard from '@/components/keyboard.vue'
import lampboard from '@/components/lampboard.vue'
import chatbox from '@/components/chatbox.vue'
import selectType from '@/components/selectTypeTool.vue'
import rotors from '@/components/rotorsTool.vue'

export default {
  name: 'home',
  components: {
    keyboard,
    chatbox,
    lampboard,
    selectType,
    rotors
  }
}
</script>

<style lang="scss">
.row {
  display: flex;
  justify-content: center;
  .col {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
