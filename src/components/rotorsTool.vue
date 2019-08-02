<template>
  <div class="rotors">
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
    }
    &__key {
      @include fontCode($white, 14px);

      background: $dark;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $white;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
