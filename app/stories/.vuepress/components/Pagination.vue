<template>
  <div class="w-64 m-auto pt-10 grid grid-flow-col grid-cols-1 grid-rows-1 gap-4">
    <div
      v-if="previous"
      class="underline cursor-pointer text-2xl"
      @click="goTo(previous)"
    >
      👈 Previous 
    </div>
    <div
      v-if="next"
      class="underline cursor-pointer text-2xl"
      @click="goTo(next)"
    >
      Next 👉
    </div>
  </div>
</template>

<script>
export default {
  props: ["previous", "next"],
  methods: {
    goTo(route) {
      this.$router.replace(route);
    },
  },
};
</script>
