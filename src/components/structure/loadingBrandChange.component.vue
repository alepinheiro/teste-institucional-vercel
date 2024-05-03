<template>
  <div
    v-if="isLoading"
    class="w-full flex items-center bg-primary h-screen transition duration-500 ease-out">
    <div class="w-5/12 sm:w-10/12 mr-auto ml-auto bg-red-500">
      <img
        :src="$options.imageConfig.brand.loadingBrandChange.image"
        :alt="$options.imageConfig.brand.loadingBrandChange.alt"
        class="w-full h-auto mr-auto ml-auto" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LoadingBrandChange',
    data() {
      return {
        isLoading: false,
      };
    },
    watch: {
      '$route.name'(newName, oldName) {
        if (newName != 'undefined') {
          this.checkRoute(newName);
        }
      },
    },
    mounted() {
      if (localStorage.getItem('alreadyViewed') === null) {
        localStorage.setItem('alreadyViewed', 'false');
      }
      if (this.$route.name !== undefined) {
        this.checkRoute(this.$route.name as string);
      }
    },
    methods: {
      checkRoute(name: string) {
        if (
          localStorage.getItem('alreadyViewed') == 'false' &&
          name !== 'Warren' &&
          name !== 'MinhaCasaFinanciada'
        ) {
          this.isLoading = true;
          setTimeout(() => {
            localStorage.setItem('alreadyViewed', 'true');
            this.isLoading = false;
          }, 10000);
        } else {
          this.isLoading = false;
        }
      },
    },
  });
</script>
