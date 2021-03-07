<template>
  <nav
    class="nav rounded-t flex items-center justify-between flex-wrap text-right pr-0 lg:pr-5 md:pr-3 sm:pr-0 border-b"
  >
    <span class="lg:w-1/3 md:w-full sm:w-full w-full">
      <Img
        src="/images/snappy.png"
        width="150"
        class="p-5"
        alt="Snappy Squirrel"
        @click="goHome()"
      />
    </span>

    <span class="lg:w-2/3 md:w-full sm:w-full w-full">
      <span
        class="title cursor-pointer block m-1 lg:m-4 md:m-2 sm:m-1"
        @click="goHome()"
        >Snappy Squirrel E-Books</span
      >
    </span>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      lang: "en",
      hidden: "lg:hidden md:hidden sm:hidden hidden",
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
