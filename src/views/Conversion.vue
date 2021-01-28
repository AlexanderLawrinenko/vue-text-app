<template>
  <div class="page">
    <layoyt>
      <template v-slot:header>
        <h3>Select rate</h3>
      </template>
      <template v-slot:body>
        <base-select
          v-model="conversionGroup.from"
          :list="getSelectList"
          :label="'Select currensy'"
        />
        <span class="divider">to</span>
        <base-select
          v-model="conversionGroup.to"
          :list="getSelectList"
          :label="'Select currensy'"
        />
      </template>
      <template v-slot:actions>
        <base-button
          :disabled="checkSelected"
          class="ssucces"
          @click="calculateRate"
          :type="'button'"
          :text="'Convertation'"
        />
        <base-button
          class="danger"
          @click="goBack"
          :type="'button'"
          :text="'Back'"
        />
      </template>
    </layoyt>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import Layoyt from "@/shared/layots/layout.vue";
import BaseSelect from "@/shared/components/BaseSelect.vue";
import BaseButton from "@/shared/components/BaseBatton.vue";

const namespace = "currency";

@Component({
  components: {
    Layoyt,
    BaseSelect,
    BaseButton
  }
})
export default class extends Vue {
  private conversionGroup = {
    from: "USD",
    to: "USD"
  };

  get checkSelected(): boolean {
    return this.conversionGroup.from === this.conversionGroup.to;
  }

  @Getter("getCurrenciesList", { namespace }) getSelectList: any;
  @Action("conversionCurrencies", { namespace }) conversionStart: any;

  public goBack() {
    this.$router.push("/");
  }
  public calculateRate() {
    if (!this.checkSelected) {
      this.conversionStart(this.conversionGroup);
      this.$router.push("/result");
    }
  }
}
</script>
