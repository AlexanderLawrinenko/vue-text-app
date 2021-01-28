<template>
  <div v-show="list" class="history">
    <h3>History:</h3>
    <ul v-for="(item, index) in historyList" :key="index" class="history-list">
      <li class="history-list__item">
        <span class="history-list__item-from">{{
          item.value + CurrencySymbol[item.from]
        }}</span
        ><span class="history-list__item-mark">{{ item.from }}</span> to
        <span class="history-list__item-mark">{{ item.to }}</span>
        <span>result: </span>
        <span class="history-list__item-result">{{
          item.result + CurrencySymbol[item.to]
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { CurrencySymbol } from "@/shared/interfaces/store/enums";

@Component
export default class extends Vue {
  private CurrencySymbol = CurrencySymbol;

  get list() {
    return this.historyList;
  }
  @Getter("getHistory") historyList: any;

  @Action("initHistory") initHistory: any;
  mounted() {
    this.initHistory();
  }
}
</script>

<style scoped></style>
