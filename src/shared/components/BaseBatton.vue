<template>
  <button
    :disabled="disabled"
    :type="type"
    class="base-btn"
    :class="{ disabled: disabled }"
    @click="$emit('click', $event)"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {
  @Prop({ default: "Click" }) private text!: string;
  @Prop({ default: "button" }) private type!: string;
  @Prop({ default: false }) private disabled!: boolean;
}
</script>
