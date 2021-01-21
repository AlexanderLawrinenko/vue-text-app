<template>
  <div class="input-container">
    <label v-if="label">{{label}}</label>
    <input
      class="text-input"
      type="text"
      :id="id"
      :name="name"
      :defaultValue="defaultValue"
      :style="{ width: width }"
      :disabled="disabled"
      :pattern="pattern"
      @input="$emit('change')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const InputText = defineComponent({
  props: {
    id: { type: String },
    label: { type: String },
    name: { type: String, required: true },
    defaultValue: { type: String },
    disabled: { type: Boolean },
    pattern: { type: String },
    width: { type: String }
  }
})

export default InputText
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  flex-direction: column;
  width: 220px;
}

label {
  font-size: 16px;
  margin-bottom: 5px;
}

.text-input {
  height: 40px;
  padding: 0 20px;
  width: 220px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  border: 2px solid $light-grey;

  &.disabled {
    opacity: 0.7;
    cursor: default;
  }
}
</style>
