declare module 'vue' {
  export interface GlobalComponents {
    IndexHeroSection: (typeof import('@/components/homePage/heroSection.component.vue'))['default'];
  }
}

export {};
