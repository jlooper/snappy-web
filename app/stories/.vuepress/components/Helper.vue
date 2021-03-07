<template>
  <div class="bg-yellow-100 mt-5">
    <h2 class="text-4xl font-bold p-1">Click the ladybug!</h2>
    <div class="flex flex-row">
      <span
        type="button"
        class="m-2 p-2 bg-transparent font-semibold"
        aria-expanded="true"
        @click="
          showResult = !showResult;
          togglePopover(item);
        "
      >
        <Img class="m-2 p-2" src="/images/ladybug.png" alt="ladybug helper" />
      </span>
      <div
        class="m-2 p-2 speech-bubble"
        ref="popoverRef"
        v-bind:class="{ hidden: !popoverShow, block: popoverShow }"
      >
        <p class="font-bold" v-if="showResult">{{ getResult }}</p>
      </div>
    </div>
  </div>
</template>
<script>
const helpers = require("@theme/utils/helpers.json");
import { emitter } from "@theme/utils/emitter";
export default {
  props: ["id"],

  computed: {
    item() {
      let item = helpers.find((row) => row.id == this.id);
      item = item || { name: "not set" };
      return item;
    },

    getResult() {
      let currItem = helpers.find((row) => row.id == this.id);

      currItem = currItem.result;

      return currItem;
    },
  },
  data() {
    //const item = helpers.find((row) => row.id == this.id);

    return {
      showResult: false,
      popoverShow: false,
    };
  },

  methods: {
    togglePopover(item) {
      if (this.popoverShow) {
        this.popoverShow = false;
      } else {
        this.popoverShow = true;
        emitter.emit("showResult", item.id);
      }
    },
  },
};
</script>

<style scoped>
.speech-bubble {
  background: #ccc;
  position: relative;
  text-align: center;
  border-radius: 10px;
}
.speech-bubble:after {
  content: "";
  position: absolute;
  display: block;
  top: 50%;
  right: 100%;
  margin-top: -10px;
  width: 0;
  height: 0;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #ccc;
}
</style>
