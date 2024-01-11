<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
        <!-- Heading -->
        <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
          Admin Layout Pages
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link to="/" v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                isActive
                  ? 'text-emerald-500 hover:text-emerald-600'
                  : 'text-blueGray-700 hover:text-blueGray-500',
              ]">
                <i class="fas fa-table mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                Events
              </a>
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
          Documentation
        </h6>
        <!-- Navigation -->
        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="inline-flex">
            <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/colors/notus" target="_blank"
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
              <i class="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
              Styles
            </a>
          </li>

          <li class="inline-flex">
            <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus" target="_blank"
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
              <i class="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
              CSS Components
            </a>
          </li>

          <li class="inline-flex">
            <a href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus" target="_blank"
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
              <i class="fab fa-angular mr-2 text-blueGray-300 text-base"></i>
              Angular
            </a>
          </li>

          <li class="inline-flex">
            <a href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus" target="_blank"
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
              <i class="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
              Javascript
            </a>
          </li>

          <li class="inline-flex">
            <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus" target="_blank"
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
              <i class="fab fa-react mr-2 text-blueGray-300 text-base"></i>
              NextJS
            </a>
          </li>

          <li class="inline-flex">
            <a href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus" target="_blank"
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
              <i class="fab fa-react mr-2 text-blueGray-300 text-base"></i>
              React
            </a>
          </li>

          <li class="inline-flex">
            <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus" target="_blank"
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
              <i class="fas fa-link mr-2 text-blueGray-300 text-base"></i>
              Svelte
            </a>
          </li>

          <li class="inline-flex">
            <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus" target="_blank"
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold">
              <i class="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>
              VueJS
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
</script>
