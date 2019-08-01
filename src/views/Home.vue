<template>
  <div class="home">
    <chatbox></chatbox>
    <keyboard msg="Welcome to Your Vue.js App"></keyboard>
  </div>
</template>

<script>
// @ is an alias to /src
import keyboard from "@/components/keyboard.vue";
import chatbox from "@/components/chatbox.vue";
export default {
  name: "home",
  components: {
    keyboard,
    chatbox
  }
};
</script>
