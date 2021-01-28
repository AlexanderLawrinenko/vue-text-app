<template>
  <div class="base-input">
    <label class="base-input__label" :for="id">{{ label }}</label>
    <select
      :id="id"
      class="base-input__control"
      :type="type"
      v-model="inputValue"
    >
      <option v-for="item in list" :key="item" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, ModelSync } from "vue-property-decorator";

@Component
export default class extends Vue {
  @ModelSync("value", "change", { type: String }) readonly inputValue!: string;
  @Prop() readonly label!: string;
  @Prop({ default: `input-${Math.floor(Math.random() * (50 - 20)) + 20}` })
  readonly id!: string;
  @Prop({ default: "input" }) readonly type!: string;
  @Prop({ required: true }) readonly list!: Array<string>;
}
</script>

<style scoped></style>
