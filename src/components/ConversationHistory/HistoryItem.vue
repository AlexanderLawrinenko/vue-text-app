<template>
  <div class="history-item">
    <div class="item">{{`${amount}${Currencies[from]} = ${result}${Currencies[to]}`}}</div>
    <div class="date" v-if="date">{{formatDate(date)}}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { Currencies } from '@/types/enums'
import { formatDate } from '@/utils/exchangeHistory'

const HistoryItem = defineComponent({
  props: {
    amount: { type: String },
    from: { type: String },
    to: { type: String },
    result: { type: String },
    date: { type: String }
  },
  setup() {
    const store = useStore()
    const history = computed(() => store.state.history)

    return {
      history
    }
  },
  data() {
    return {
      Currencies,
      formatDate
    }
  }
})

export default HistoryItem
</script>

<style scoped lang="scss">
.history-item {
  border: 2px solid $light-grey;
  border-radius: 20px;
  padding: 15px 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
}

.item {
  font-size: 16px;
  font-weight: 500;
}

.date {
  font-size: 14px;
  color: $passive-text;
}
</style>
