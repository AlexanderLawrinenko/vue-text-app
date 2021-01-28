<template>
  <div class="base-input">
    <label class="base-input__label" :for="id">{{ label }}</label>
    <input
      :id="id"
      class="base-input__control"
      :type="type"
      v-model="inputValue"
    />
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
}
</script>
