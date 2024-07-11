<template>
  <picture>
    <source
      v-for="breakpoint in breakpoints"
      :key="breakpoint.name"
      type="image/webp"
      :media="breakpoint.media"
      :srcset="generateSrcset(breakpoint.name)"
      :sizes="breakpoint.sizes" />
    <img
      v-bind="$props.imgAttrs"
      class="h-full w-full object-cover"
      :src="generateSrc(imagePath, 'xs')" />
  </picture>
</template>

<script lang="ts">
  import { defineComponent, type PropType, type ImgHTMLAttributes } from 'vue';

  export default defineComponent({
    name: 'ResponsiveImage',
    props: {
      imagePath: {
        type: String,
        required: true,
      },
      imgAttrs: {
        type: Object as PropType<ImgHTMLAttributes>,
        default: () => ({}),
      },
    },
    data() {
      return {
        breakpoints: [
          {
            name: 'xs',
            media: '(max-width: 420px)',
            sizes: '(max-width: 420px) 100vw, 50vw',
          },
          {
            name: 'sm',
            media: '(min-width: 421px) and (max-width: 767px)',
            sizes: '(min-width: 421px) and (max-width: 767px) 100vw, 50vw',
          },
          {
            name: 'md',
            media: '(min-width: 768px) and (max-width: 1023px)',
            sizes: '(min-width: 768px) and (max-width: 1023px) 100vw, 50vw',
          },
          {
            name: 'lg',
            media: '(min-width: 1024px) and (max-width: 1279px)',
            sizes: '(min-width: 1024px) and (max-width: 1279px) 100vw, 50vw',
          },
          {
            name: 'xl',
            media: '(min-width: 1280px)',
            sizes: '(min-width: 1280px) 100vw, 50vw',
          },
        ],
      };
    },
    methods: {
      getFileName(imagePath: string) {
        const parts = imagePath.split('/');
        return parts[parts.length - 1];
      },
      getFileDir(imagePath: string) {
        const parts = imagePath.split('/');
        parts.pop();
        return parts.join('/');
      },
      getFileBaseName(fileName: string) {
        return fileName.substring(0, fileName.lastIndexOf('.'));
      },
      generateSrc(imagePath: string, size: string) {
        const fileName = this.getFileName(imagePath);
        const dirName = this.getFileDir(imagePath);
        const baseName = this.getFileBaseName(fileName);
        return `${dirName.replace('images', 'images/webp')}/${baseName}-${size}.webp`;
      },
      // generateSrcset(size: string) {
      //   return `${this.generateSrc(this.imagePath, size)} 1x, ${this.generateSrc(this.imagePath, `${size}@2x`)} 2x`;
      // },
      generateSrcset(size: string) {
        const src = this.generateSrc(this.imagePath, size);
        // const srcset = `${src} 1x, ${this.generateSrc(this.imagePath, `${size}@2x`)} 2x`;
        const srcset = `${src} 1x`;
        return srcset;
      },
    },
  });
</script>
