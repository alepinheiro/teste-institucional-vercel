import { useHead, useSeoMeta } from '@unhead/vue'
import { Router } from 'vue-router'

export const seoMiddleware = (router: Router) => {
  router.beforeEach((to, from) => {
    if (!to.meta) return
    useHead({
      link: [
        {
          rel: 'canonical',
          href: window.location.origin + window.location.pathname,
        },
      ],
      title: to.meta.title,
      meta: [
        {
          name: 'description',
          content: to.meta.description,
        },
      ],
    })
    useSeoMeta({
      title: to.meta.title,
      description: to.meta.description,
      ogDescription: to.meta.description,
      ogTitle: to.meta.title,
      ogImage: window.location.origin + '/images/Home/heroBackground-sm.png ',
      ogUrl: window.location.origin + window.location.pathname,
      ogType: 'website',
    })
  })
}
