<template>
  <div class="markdown-body text-center">
    <div class="p-5 bg-green-900">
      <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full lg:w-1/2 px-2">
            <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
              <router-link
                class="inline-block align-top cursor-pointer"
                to="/book1/1"
              >
                <p
                  class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold underline"
                >
                  Snappy and the Nuts
                </p>

                <p
                  class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
                >
                  Snappy needs to save nuts for winter.
                </p>
              </router-link>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
              <div
                class="inline-block align-top cursor-pointer"
                @click="goToSite('https://practicebuddyapp.com')"
              >
                <p
                  class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold underline"
                >
                  Snappy Needs a Nest
                </p>

                <p
                  class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
                >
                  Snappy needs a warm home!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full lg:w-1/2 px-2">
            <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
              <div
                class="cursor-pointer"
                @click="goToSite('https://yomamaisa.dev')"
              >
                <div class>
                  <p
                    class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
                  >
                    Snappy Plays the Stock Market
                  </p>
                  <p
                    class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
                  >
                    Snappy loses some and wins some!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
              <div
                class="cursor-pointer"
                @click="goToSite('https://www.quicknoms.com')"
              >
                <div class="inline-block align-top">
                  <p
                    class="underline text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center"
                  >
                    Snappy Loses
                  </p>
                  <p
                    class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
                  >
                    Yea he do
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full lg:w-1/2 px-2">
            <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
              <div
                class="cursor-pointer"
                @click="goToSite('https://www.snappysquirrel.com')"
              >
                <div class>
                  <p
                    class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
                  >
                    Snappy Buys a Bond
                  </p>
                  <p
                    class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
                  >
                    to be safe
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
              <div
                class="cursor-pointer"
                @click="goToSite('https://www.thinglearn.com')"
              >
                <div class="inline-block align-top">
                  <p
                    class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold"
                  >
                    More Coming Soon!
                  </p>
                  <p
                    class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
                  >
                    stay tuned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
};
</script>
