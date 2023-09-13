import { NotificationInterface } from "@/interfaces/notification.interface";
import { ComponentInternalInstance } from 'vue'

declare module "*.vue" {
  import { Component } from "vue";
  let component: Component;
  export default component;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $root: ComponentInternalInstance & {
      notificationData: NotificationInterface | undefined
      utms: string
    }
  }
}