// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useRoute } from 'vue-router'
export function useObjectToQueryString(obj: { [x: string]: any }) {
  const route = useRoute()
  let utms = '?utm_source=organico&utm_medium=home'
  if(route!==undefined && route.path!==undefined && route.path!=='/')
    utms = '?utm_source=organico&utm_medium='+route.path
  if (Object.keys(obj).length === 0) return utms
  const queryString = Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&')
  return '?' + queryString
}
