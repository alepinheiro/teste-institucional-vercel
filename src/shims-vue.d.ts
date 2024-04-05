import { NotificationInterface } from '@/interfaces/notification.interface'
import { ComponentInternalInstance } from 'vue'
import type information from '@/configurations/information'
import { FbEvents } from '@/interfaces/analytics/fbEvents'

declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
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
    title: string
    description: string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $root: ComponentInternalInstance & {
      notificationData?: NotificationInterface
      utms: string
    }
    $options: {
      information?: information
    }
  }
}
