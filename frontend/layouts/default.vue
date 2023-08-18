<template>
    <div class="layout">
        <!-- <pre>default layout</pre> -->
        <slot />
        <!-- <AppFooter /> -->

        <footer>
            <div>Copyright © 2023 321paranoiawhy . All Rights Reserved.</div>
            <div>Powered by <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer">Nuxt</a> & <a
                    href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">Nest</a> & <a
                    href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a>
            </div>
        </footer>
    </div>
</template>
  
<style scoped>
a {
    color: rgb(245, 101, 101);
}
/* div {
    background-color: lightgreen;
} */
</style>
  