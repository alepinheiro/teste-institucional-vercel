import { NotificationInterface } from '@/interfaces/notification.interface';
import { ComponentInternalInstance } from 'vue';
// import type information from '@/configurations/information';
import { FbEvents } from '@/interfaces/analytics/fbEvents';
// import imageConfig from './configurations/images';

declare module '*.vue' {
  import { Component } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare global {
  interface Window {
    fbq: FbEvents;
    dataLayer: {
      push: function;
    };
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    description: string;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $root: ComponentInternalInstance & {
      notificationData?: NotificationInterface;
      utms: string;
    };
    // $options: {
    //   information: typeof information;
    //   imageConfig: typeof imageConfig;
    // };
  }
}

declare module 'vue-the-mask';
declare module 'vue-cookies';
declare module 'vue-scrollto';
declare module '@fortawesome/fontawesome-svg-core';
declare module '@fortawesome/vue-fontawesome';
declare module '@unhead/vue';
