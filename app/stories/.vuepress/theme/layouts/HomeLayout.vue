<template>
  <div class="markdown-body text-center">
    <div class="p-5 bg-orange-800">
      <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full lg:w-1/2 px-2">
            <div class="bg-gray-100 card">
              <router-link
                class="inline-block align-top cursor-pointer"
                to="/book1/1"
              >
                <p
                  class="text-5xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold underline"
                >
                  Snappy and the Nuts
                </p>
                <img class="m-auto" src="/images/bk-1.png" alt="book 1"/>

                <p
                  class="inline-block text-4xl lg:text-3xl md:text-2xl sm:text-lg p-2 align-top"
                >
                  Snappy needs to save nuts for winter.
                </p>
              </router-link>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <div class=" bg-gray-100 card">
              <div
                class="inline-block align-top cursor-pointer"
                
              >
                <p
                  class="text-5xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold"
                >
                  Snappy Needs a Nest
                </p>
                  <img class="m-auto" src="/images/bk-2.png" alt="book 2"/>
                <p
                  class="inline-block text-4xl lg:text-3xl md:text-2xl sm:text-lg p-2 align-top"
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
            <div class=" bg-gray-100 card">
              <div
                class="cursor-pointer"
                
              >
                <div class>
                  <p
                  class="text-5xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold "
                >
                    Snappy Plays the Stock Market
                  </p>
                  
                  <img class="m-auto" src="/images/bk-3.png" alt="book 3"/>

                  <p
                  class="inline-block text-4xl lg:text-3xl md:text-2xl sm:text-lg p-2 align-top"
                >
                    Snappy loses some and wins some!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <div class=" bg-gray-100">
              <div
                class="cursor-pointer"
                
              >
                <div class="inline-block align-top">
                  <p
                  class="text-5xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold "
                >
                    Snappy Loses
                  </p>
                    <img class="m-auto" src="/images/bk-4.png" alt="book 4"/>

                  <p
                  class="inline-block text-4xl lg:text-3xl md:text-2xl sm:text-lg p-2 align-top"
                >
                    A risky investment!
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
            <div class="bg-gray-100 card">
              <div
                class="cursor-pointer"
                
              >
                <div class>
                  <p
                  class="text-5xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold "
                >
                    Snappy Buys a Bond
                  </p>
                  
                  <img class="m-auto" src="/images/bk-5.png" alt="book 5"/>

                  <p
                  class="inline-block text-4xl lg:text-3xl md:text-2xl sm:text-lg p-2 align-top"
                >
                    A safer way to invest!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2">
            <div class="bg-gray-100 card">
              <div
                class="cursor-pointer"
                
              >
                <div class="inline-block align-top">
                  <p
                  class="text-5xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold "
                >
                    More Coming Soon!
                  </p>
                
                <img width="125" class="m-auto" src="/images/snappy.png" alt="Snappy"/>

                  <p
                  class="inline-block text-4xl lg:text-3xl md:text-2xl sm:text-lg p-2 align-top"
                >
                    Stay tuned!
          
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
