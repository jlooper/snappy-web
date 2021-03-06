<template>
  <div class="markdown-body">
    <p class="text-5xl text-white font-bold pt-5 ml-5 text-sans">
      {{ $page.frontmatter.title }}
    </p>

    <div ref="ircontent" class="p-5 bg-white m-5 rounded">
      <Content />
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicLayout",
};
</script>
