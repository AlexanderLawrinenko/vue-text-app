<template>
  <div class="page">
    <layoyt>
      <template v-slot:header>
        <h3>Enter value</h3>
      </template>
      <template v-slot:body>
        <base-input v-model="currency" :label="'Enter sum'" />
      </template>
      <template v-slot:actions>
        <base-button
          :disabled="getValid"
          class="ssucces"
          @click="getList"
          :type="'button'"
          :text="'Convertation'"
        />
        <base-button
          class="danger"
          @click="currency = '0'"
          :type="'button'"
          :text="'Clear'"
        />
      </template>
    </layoyt>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation } from "vuex-class";
import Layoyt from "@/shared/layots/layout.vue";
import BaseInput from "@/shared/components/BaseInput.vue";
import BaseButton from "@/shared/components/BaseBatton.vue";

const namespace = "currency";

@Component({
  components: {
    Layoyt,
    BaseInput,
    BaseButton
  }
})
export default class Home extends Vue {
  get currency(): string {
    return String(this.getValue);
  }

  set currency(value: string) {
    this.setValue(value);
  }

  get validation(): boolean {
    return this.getValid;
  }

  get isLoad(): boolean {
    return this.preloader;
  }

  @Getter("getPreloader") preloader: any;

  @Getter("getCurrencyValue", { namespace }) getValue: any;

  @Getter("getValueValid", { namespace }) getValid: any;

  @Mutation("SET_VALUE", { namespace }) setValue: any;

  @Action("getCurrency", { namespace }) getAction: any;

  public async getList() {
    await this.getAction().then((value: boolean) => {
      if (value) {
        this.$router.push("/conversion");
      } else {
        this.currency = "0";
      }
    });
  }
}
</script>
