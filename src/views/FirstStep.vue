<template>
  <form @submit.prevent="onSubmit">
    <div class="row">
      <div class="step active">1</div>
      <div class="line active"/>
      <div class="step">2</div>
      <div class="line"/>
      <div class="step">3</div>
    </div>
    <div class="row">
      <InputText
        id="amount"
        label="Type amount"
        name="amount"
        :defaultValue="amount"
        pattern="\d+(\.\d+)?"
        @change="handleInputChange"
      />
    </div>
    <div class="row">
      <Button
        title="Next"
        type="submit"
        isPrimary
      />
    </div>
    <Button
      title="Reset"
      type="reset"
      @click="resetForm"
    />
  </form>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import InputText from '@/components/InputText.vue'
import { useStore } from '@/store'
import { MutationTypes } from '@/store/mutations'

const FirstStep = defineComponent({
  setup() {
    const store = useStore()
    const exchangeOptions = computed(() => store.state.exchangeOptions)
    const amount = computed(() => store.getters.amount)

    const handleInputChange = (e: any) => {
      store.commit(MutationTypes.SET_EXCHANGE_OPTIONS, {
        ...exchangeOptions.value,
        amount: +e?.target.value.toString()
      })
    }

    const resetForm = () => {
      store.commit(MutationTypes.SET_EXCHANGE_OPTIONS, {
        ...exchangeOptions.value,
        amount: '0'
      })
    }

    return {
      amount,
      handleInputChange,
      resetForm
    }
  },
  methods: {
    onSubmit() {
      if (+this.amount) {
        this.$router.push('/choose-currency-pair')
      }
    }
  },
  components: {
    Button,
    InputText
  }
})

export default FirstStep
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
</style>
