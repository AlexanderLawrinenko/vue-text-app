<template>
  <button
    class="button"
    :class="[ isPrimary ? 'primary' : 'secondary', { 'disabled': disabled } ]"
    :style="{ width: width }"
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{title}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Button = defineComponent({
  props: {
    title: { type: String },
    isPrimary: { type: Boolean },
    type: { type: String },
    disabled: { type: Boolean },
    width: { type: String }
  }
})

export default Button
</script>

<style scoped lang="scss">
.button {
  height: 40px;
  width: 220px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  border: 2px solid $primary;

  &.primary {
    background: $primary;
    color: $white;
  }

  &.secondary {
    background: $white;
    color: $primary;
  }

  &.disabled {
    opacity: 0.7;
    cursor: default;
  }
}
</style>
