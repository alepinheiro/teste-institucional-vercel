import {  RouteRecordRaw } from 'vue-router'
import { routes } from '../router/routes'

function useGenerateSitemap(routes: Array<RouteRecordRaw>) {
  const sitemap: Array<string> = []

  for (const route of routes) {
    sitemap.push(route.path)
    if (route.alias) {
      for (const alias of route.alias) {
        sitemap.push(alias)
      }
    }
  }

  return sitemap
}

const sitePaths = useGenerateSitemap(routes)
console.log(sitePaths)