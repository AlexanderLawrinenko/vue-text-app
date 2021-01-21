<template>
  <div class="history">
    <h3>Conversion History</h3>
    <ul v-if="history">
      <li v-for="historyItem in history" :key="historyItem.date">
        <HistoryItem
          :amount="historyItem.amount"
          :from="historyItem.from"
          :to="historyItem.to"
          :result="historyItem.result"
          :date="historyItem?.date"
        />
      </li>
    </ul>
    <ul v-else>There will be your conversion history</ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import HistoryItem from './HistoryItem.vue'

const ConversionHistory = defineComponent({
  setup() {
    const store = useStore()
    const history = computed(() => store.state.history)

    return {
      history
    }
  },
  components: {
    HistoryItem
  }
})

export default ConversionHistory
</script>

<style scoped lang="scss">
.history {
  background: $light-grey;
  padding: 30px;
}

ul {
  width: 100%;
  height: calc(100% - 60px);
  box-sizing: border-box;
  background: $white;
  padding: 15px;
  overflow-y: scroll;
  font-size: 18px;
  font-weight: 500;
  color: $passive-text;

  li {
    list-style-type: none;
  }
}
</style>
