<template>
  <button @click="$emit('btn_click')" class="primary__btn">
    {{ btn_text }}
  </button>
</template>

<script>
export default {
  props: { btn_text: String },
}
</script>

<style lang="scss" scoped>
.primary__btn {
  @include btn;
  border: none;
  background: $white;
  color: $black;
  box-shadow: $shadow_btn_white;
  transition: all 0.3s ease 0s;

  &:hover {
    color: $white;
    background: none;
      box-shadow: 0px 0px 0px 1.5px $white inset;

  }
}
</style>
