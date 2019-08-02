<template>
  <div class="keyboard">
    <div class="keyboard__row" v-for="row in kb" v-bind:key="row.id">
      <div
        class="keyboard__key"
        v-for="key in row"
        v-bind:key="key.id"
        v-bind:class="key.class"
        @click="log(key)"
      >{{key.key}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keyboard",
  props: {
    msg: String
  },
  data: () => ({
    kb: [
      [
        { key: "q", class: "" },
        { key: "w", class: "" },
        { key: "e", class: "" },
        { key: "r", class: "" },
        { key: "t", class: "" },
        { key: "z", class: "" },
        { key: "u", class: "" },
        { key: "i", class: "" },
        { key: "o", class: "" }
      ],
      [
        { key: "a", class: "" },
        { key: "s", class: "" },
        { key: "d", class: "" },
        { key: "f", class: "" },
        { key: "g", class: "" },
        { key: "h", class: "" },
        { key: "j", class: "" },
        { key: "k", class: "" }
      ],
      [
        { key: "p", class: "" },
        { key: "y", class: "" },
        { key: "x", class: "" },
        { key: "c", class: "" },
        { key: "v", class: "" },
        { key: "b", class: "" },
        { key: "n", class: "" },
        { key: "m", class: "" },
        { key: "l", class: "" }
      ]
    ]
  }),
  methods: {
    log(e) {
      console.log(e);
    },
    keyPress(e) {
      this.kb.forEach(row => {
        row.forEach(key => {
          if (key.key == e.key) {
            key.class = "keyboard__key--click";
            setTimeout(() => {
              key.class = "";
            }, 200);
          }
        });
      });
    }
  },

  mounted() {
    let self = this;

    window.addEventListener("keypress", e => {
      self.keyPress(e);
    });
  }
};
</script>

<style scoped lang="scss">
.keyboard {
  width: 504px;
  user-select: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__row {
    display: flex;
    flex-direction: row;
  }
  &__key {
    height: 40px;
    width: 40px;
    background: $dark;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
    cursor: pointer;
    @include fontCode($white, 30px);
    &--click {
      background: $primary;
    }
    &:active {
      background: $primary;
    }
  }
}
</style>
