<template>
  <footer>
    <div>Copyright © 2023 321paranoiawhy . All Rights Reserved.</div>
    <div>
      Powered by
      <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer"
        >Nuxt</a
      >
      &
      <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer"
        >Nest</a
      >
      &
      <a
        href="https://pages.github.com/"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub Pages</a
      >
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  text-align: center;
  margin: 16px 0;
  & a {
    color: rgb(245, 101, 101);
  }
  & div:first-child {
    margin-bottom: 0.375rem;
  }
}
</style>
