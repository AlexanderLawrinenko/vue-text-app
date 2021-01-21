<template>
  <div class="result-container">
    <div class="row">
      <div class="step active">1</div>
      <div class="line active"/>
      <div class="step active">2</div>
      <div class="line active"/>
      <div class="step active">3</div>
    </div>
    <div class="amount">{{exchangeOptions.amount && (+exchangeOptions.amount).toFixed(2)}} {{Currencies[exchangeOptions.from]}} =</div>
    <div class="row">
      <div class="result">{{result.toFixed(2)}} {{Currencies[exchangeOptions.to]}}</div>
    </div>
    <div class="row">
      <Button
        title="Calculate again"
        type="button"
        @click="goToFirstStep"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import { useStore } from '@/store'
import { MutationTypes } from '@/store/mutations'
import { Currencies } from '@/types/enums'
import { convert } from '@/utils/exchange'

const Result = defineComponent({
  setup() {
    const store = useStore()
    const exchangeOptions = computed(() => store.state.exchangeOptions)
    const rates = computed(() => store.state.rates)

    const clearExchangeOptions = () => {
      store.commit(MutationTypes.SET_EXCHANGE_OPTIONS, {
        amount: 0,
        from: '',
        to: ''
      })
    }

    return {
      clearExchangeOptions,
      exchangeOptions,
      rates
    }
  },
  data() {
    return {
      Currencies
    }
  },
  computed: {
    result(): number {
      if (this.rates && +this.exchangeOptions.amount >= 0) {
        return convert(this.rates, this.exchangeOptions)
      }
      this.goToFirstStep()
      return 0
    }
  },
  methods: {
    goToFirstStep() {
      this.clearExchangeOptions()
      this.$router.push('/')
    }
  },
  components: {
    Button
  }
})

export default Result
</script>

<style lang="scss" scoped>
  result-container {
    margin: auto;
  }

  .row {
    margin: 0 auto 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .step {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $grey;
    color: $white;

    &.active {
      background: $primary;
      color: $white;
    }
  }

  .line {
    width: 30px;
    height: 2px;
    margin: 0 8px;
    background: $grey;

    &.active {
      background: $primary;
    }
  }

  .amount{
    font-size: 24px;
    font-weight: 600;
  }

  .result {
    font-size: 36px;
    font-weight: 600;
  }
</style>
