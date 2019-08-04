<template>
  <div class="rotors">
    <div class="rotors-rotor">
      <div class="rotors-rotor__button">VIII</div>
      <div class="rotors-rotor__wheel">
        <span class="rotors-rotor__key">1</span>
        <span class="rotors-rotor__key">0</span>
        <span class="rotors-rotor__key rotors-rotor__key--activ">26</span>
        <span class="rotors-rotor__key">25</span>
        <span class="rotors-rotor__key">24</span>
      </div>
    </div>
    <div class="rotors-rotor">
      <div class="rotors-rotor__button">VIII</div>
      <div class="rotors-rotor__wheel">
        <span class="rotors-rotor__key">1</span>
        <span class="rotors-rotor__key">0</span>
        <span class="rotors-rotor__key">26</span>
        <span class="rotors-rotor__key">25</span>
        <span class="rotors-rotor__key">24</span>
      </div>
    </div>
    <div class="rotors-rotor">
      <div class="rotors-rotor__button">VIII</div>
      <div class="rotors-rotor__wheel">
        <span class="rotors-rotor__key">1</span>
        <span class="rotors-rotor__key">0</span>
        <span class="rotors-rotor__key">26</span>
        <span class="rotors-rotor__key">25</span>
        <span class="rotors-rotor__key">24</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rotors"
};
</script>

<style lang="scss">
.rotors {
  display: flex;
  &-rotor {
    display: flex;
    flex-direction: column;
    &__button {
      margin: 5px;
      @include fontCode($white, 20px);

      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $dark;
      border-radius: 50%;
    }
    &__wheel {
      display: flex;
      flex-direction: column;
      align-items: center;
      // background: $dark;
      // margin: 15px;
      // border-radius: 40%;
    }
    &__key {
      @include fontCode($primary, 14px);

      background: $white;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $dark;

      &:last-child {
        border: none;
      }
      &--activ {
        color: $black;
      }
    }
  }
}
</style>
