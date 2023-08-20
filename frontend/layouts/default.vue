<template>
  <div class="layout">
    <Header></Header>
    <slot />

    <div class="expand"></div>

    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  /* 必加 */
  min-height: 100vh;
  & div.expand {
    flex: 1;
  }
}
</style>
