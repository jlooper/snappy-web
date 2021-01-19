<template>
  <div class="pt-10 text-2xl">
    <div class="text-underline block cursor-pointer">
      <router-link :to="link || './'">{{ action }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["url", "action", "condition", "instructions"],

  data() {
    return {
      show: false,
      link: this.url,
    };
  },
  methods: {
    goToRoom(url) {
      this.$router.replace({ path: url });
    },
  },
};
</script>
