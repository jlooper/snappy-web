<template>
  <div class="markdown-body">
    <p class="text-4xl text-white font-bold pt-5 ml-5 text-sans">
      {{ $page.frontmatter.title }}
    </p>
    <!--<div
      class="immersive-reader-button text-white font-bold border-2 border-blue-800 border-rounded"
      data-button-style="iconAndText"
      @click="launchImmersiveReader()"
    ></div>-->
    <div ref="ircontent" class="p-5 bg-white m-5 rounded">
      <Content />
    </div>
  </div>
</template>

<script>
//import * as ImmersiveReader from "@microsoft/immersive-reader-sdk";

export default {
  name: "BasicLayout",
  data() {
    return {
      div: "",
    };
  },
  methods: {
    /*launchImmersiveReader() {
      const data = {
        chunks: [
          {
            content: this.div,
            mimeType: "text/html",
          },
        ],
      };

      ImmersiveReader.launchAsync(
        "1eb4e4ba2124453eae3e9d69e4c0773a",
        "snappy-reader",
        data
      );
    },*/
  },
  mounted() {
    //let div = this.$refs.ircontent.innerText;
    //this.div = div;
  },
};
</script>
