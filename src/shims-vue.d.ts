import { NotificationInterface } from '@/interfaces/notification.interface'
import { ComponentInternalInstance } from 'vue'
import type information from '@/configurations/information'

declare module '*.vue' {
  import { Component } from 'vue';
  const component: Component;
  export default component;
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
