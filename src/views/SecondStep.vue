<template>
  <form @submit.prevent="onSubmit">
    <div class="row">
      <div class="step active">1</div>
      <div class="line active"/>
      <div class="step active">2</div>
      <div class="line active"/>
      <div class="step">3</div>
    </div>
    <Loader v-if="isLoading" />
    <div class="row" v-if="!isLoading">
      <Select
        id="from"
        name="from"
        label="From"
        :options="currencies"
        @change="handleChange"
      />
      <div class="arrows">⇄</div>
      <Select
        id="to"
        name="to"
        label="To"
        :options="[...currencies].reverse()"
        @change="handleChange"
      />
    </div>
    <div class="row">
      <Button
        title="Next"
        type="submit"
        isPrimary
      />
    </div>
    <div class="row">
      <Button
        title="Back"
        type="button"
        @click="goBack"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue'
import Button from '@/components/Button.vue'
import Loader from '@/components/Loader.vue'
import Select from '@/components/Select.vue'
import { useStore } from '@/store'
import { MutationTypes } from '@/store/mutations'
import { ActionTypes } from '@/store/actions'
import { Currencies } from '@/types/enums'
import { Rate } from '@/types/types'

const SecondStep = defineComponent({
  setup() {
    const store = useStore()
    const exchangeOptions = computed(() => store.state.exchangeOptions)
    const isLoading = computed(() => store.getters.isLoading)
    const rates = computed(() => store.getters.rates)
    const currencies = computed(() => store.getters.currencies)

    onBeforeMount(async() => {
      store.commit(MutationTypes.SET_IS_LOADING, true)
      await store.dispatch(ActionTypes.SET_RATES)
      const updatedCurrencies = rates.value?.map((rate: Rate) => rate.ccy)
      for (let index = 0; index < rates.value?.length; index++) {
        if (!updatedCurrencies.includes(rates.value[index].base_ccy)) {
          updatedCurrencies.push(rates.value[index].base_ccy)
        }
      }
      store.commit(MutationTypes.SET_CURRENCIES, updatedCurrencies)
      store.commit(MutationTypes.SET_EXCHANGE_OPTIONS, {
        ...exchangeOptions.value,
        from: updatedCurrencies[0],
        to: updatedCurrencies[updatedCurrencies.length - 1]
      })
      store.commit(MutationTypes.SET_IS_LOADING, false)
    })

    const handleChange = (e: any) => {
      if (e.target.name === 'from') {
        store.commit(MutationTypes.SET_EXCHANGE_OPTIONS, {
          ...exchangeOptions.value,
          from: e?.target.value
        })
      }
      if (e.target.name === 'to') {
        store.commit(MutationTypes.SET_EXCHANGE_OPTIONS, {
          ...exchangeOptions.value,
          to: e?.target.value
        })
      }
    }

    return {
      isLoading,
      rates,
      exchangeOptions,
      handleChange,
      currencies
    }
  },
  data() {
    return {
      Currencies
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/result')
    },
    goBack() {
      this.$router.push('/')
    }
  },
  components: {
    Button,
    Loader,
    Select
  }
})

export default SecondStep
</script>

<style lang="scss" scoped>
  form {
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

  .arrows {
    color: $grey;
    font-weight: 600;
    margin: 22px 18px 0 18px;
  }
</style>
