declare module 'vue' {
  export interface GlobalComponents {
    IndexHeroSection: (typeof import('@/components/homePage/heroSection.component.vue'))['default'];
    ResponsiveImage: (typeof import('@/components/base/image.component.vue'))['default'];
  }
}

export {};
