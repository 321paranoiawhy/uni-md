<template>
  <div class="markdown-body">
    <h1>Heading 1</h1>

    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <p>This is a <code>code</code>.</p>

    <a
      class="external-link"
      href="http://"
      target="_blank"
      rel="noopener noreferrer"
      >This is a link.</a
    >

    <h2>Unordered list</h2>

    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ul>

    <h2>Ordered list</h2>
    <ol>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ol>

    <strong>This is a strong.</strong>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log("onMounted");
  document
    .querySelectorAll("h1, h2, h3, h4, h5, h6")
    .forEach((heading, index, arr) => {
      const a = document.createElement("a");
      a.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';
      const content = heading.innerHTML.toLowerCase().replace(/ /g, "-");
      a.href = `#${content}`;
      heading.setAttribute("id", content);
      heading.appendChild(a);
    });
});
</script>

<style scoped>
.markdown-body {
  max-width: 1280px;
  margin: 0 auto;
  scroll-behavior: smooth;
}
</style>
