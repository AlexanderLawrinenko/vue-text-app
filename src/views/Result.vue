<template>
  <div class="page">
    <layoyt>
      <template v-slot:header>
        <h3>Result</h3>
      </template>
      <template v-slot:body>
        <div>
          <p>{{ getResult.result }} {{ CurrencySymbol[getResult.to] }}</p>
        </div>
      </template>
      <template v-slot:actions>
        <base-button
          class="ssucces"
          @click="goHome"
          :type="'button'"
          :text="'home'"
        />
      </template>
    </layoyt>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Layoyt from "@/shared/layots/layout.vue";
import BaseButton from "@/shared/components/BaseBatton.vue";
import { CurrencySymbol } from "@/shared/interfaces/store/enums";

const namespace = "currency";

@Component({
  components: {
    Layoyt,
    BaseButton
  }
})
export default class extends Vue {
  private CurrencySymbol = CurrencySymbol;

  get getResult(): number {
    return this.result;
  }

  @Getter("getResulr", { namespace }) result: any;

  @Action("initHistory") initHistory: any;
  public goHome(): void {
    this.$router.push("/");
  }

  mounted() {
    this.initHistory()
  }
}
</script>
