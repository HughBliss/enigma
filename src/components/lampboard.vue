<template>
  <div class="lampboard">
    <div class="lampboard__row" v-for="row in lb" v-bind:key="row.id">
      <div
        class="lampboard__key"
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
  name: 'lampboard',
  props: {
    msg: String
  },
  data: () => ({
    lb: [
      [
        { key: 'q', class: '' },
        { key: 'w', class: '' },
        { key: 'e', class: '' },
        { key: 'r', class: '' },
        { key: 't', class: '' },
        { key: 'z', class: '' },
        { key: 'u', class: '' },
        { key: 'i', class: '' },
        { key: 'o', class: '' }
      ],
      [
        { key: 'a', class: '' },
        { key: 's', class: '' },
        { key: 'd', class: '' },
        { key: 'f', class: '' },
        { key: 'g', class: '' },
        { key: 'h', class: '' },
        { key: 'j', class: '' },
        { key: 'k', class: '' }
      ],
      [
        { key: 'p', class: '' },
        { key: 'y', class: '' },
        { key: 'x', class: '' },
        { key: 'c', class: '' },
        { key: 'v', class: '' },
        { key: 'b', class: '' },
        { key: 'n', class: '' },
        { key: 'm', class: '' },
        { key: 'l', class: '' }
      ]
    ]
  }),
  methods: {
    log (e) {
      console.log(e)
    },
    keyPress (e) {
      this.lb.forEach(row => {
        row.forEach(key => {
          if (key.key === e.key) {
            key.class = 'lampboard__key--click'
            setTimeout(() => {
              key.class = ''
            }, 200)
          }
        })
      })
    }
  },

  mounted () {
    const self = this

    window.addEventListener('keypress', e => {
      self.keyPress(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/fonts";

.lampboard {
  width: 504px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  &__row {
    display: flex;
    flex-direction: row;
  }
  &__key {
    height: 40px;
    width: 40px;
    background: $light;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
    cursor: pointer;
    @include fontCode($black, 30px);
    &--click {
      background: $white;
      box-shadow: 0 0 25px $white;
    }
    &:active {
      box-shadow: 0 0 25px $white;
      background: $white;
    }
  }
}
</style>
