<template>
  <main>
    <ConversionHistory />
    <div id="nav">
      <h1>Currency Converter</h1>
      <router-view/>
    </div>
  </main>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import ConversionHistory from '@/components/ConversationHistory/ConversionHistory'

@Options({
  components: {
    ConversionHistory
  }
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
}

main {
  display: flex;
  min-height: 100vh;

  > div {
    width: 60%;

    &:first-child {
      width: 40%;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
