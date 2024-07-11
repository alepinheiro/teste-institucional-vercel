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
      :alt="alt"
      loading="eager"
      fetchpriority="high"
      class="h-full w-full object-cover"
      :src="generateSrc(imagePath, 'sm')" />
  </picture>
</template>

<script>
  export default {
    name: 'ResponsiveImage',
    props: {
      imagePath: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        breakpoints: [
          {
            name: 'sm',
            media: '(max-width: 767px)',
            sizes: '(max-width: 767px) 100vw, 50vw',
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
      getFileName(imagePath) {
        const parts = imagePath.split('/');
        return parts[parts.length - 1];
      },
      getFileDir(imagePath) {
        const parts = imagePath.split('/');
        parts.pop();
        return parts.join('/');
      },
      getFileBaseName(fileName) {
        return fileName.substring(0, fileName.lastIndexOf('.'));
      },
      getFileExtension(fileName) {
        return fileName.substring(fileName.lastIndexOf('.'));
      },
      generateSrc(imagePath, size) {
        const fileName = this.getFileName(imagePath);
        const dirName = this.getFileDir(imagePath);
        const baseName = this.getFileBaseName(fileName);
        return `${dirName}/${baseName}-${size}.webp`;
      },
      generateSrcset(size) {
        return `${this.generateSrc(this.imagePath, size)} 1x, ${this.generateSrc(this.imagePath, `${size}@2x`)} 2x`;
      },
    },
  };
</script>
