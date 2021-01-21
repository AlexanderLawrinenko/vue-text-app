<template>
  <div class="select-container">
    <label v-if="label">{{label}}</label>
    <select
      :id="id"
      :name="name"
      @change="$emit('change')"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{option}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Select = defineComponent({
  props: {
    id: { type: String },
    label: { type: String },
    name: { type: String, required: true },
    options: { type: Array }
  }
})

export default Select
</script>

<style scoped lang="scss">
.select-container {
  display: flex;
  flex-direction: column;
  width: 140px;
}

label {
  font-size: 16px;
  margin-bottom: 5px;
}

select {
  height: 40px;
  padding: 0 20px;
  width: 140px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  border: 2px solid $light-grey;
}
</style>
