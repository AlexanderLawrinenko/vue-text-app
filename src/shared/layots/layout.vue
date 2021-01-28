<template functional>
  <div class="currency">
    <div class="currency-header">
      <slot name="header"></slot>
    </div>
    <div class="currency-body">
      <slot name="body"></slot>
    </div>
    <div class="currency-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
