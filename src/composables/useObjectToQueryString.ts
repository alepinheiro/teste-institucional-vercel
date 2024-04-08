// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useObjectToQueryString(obj: { [x: string]: any }) {
  if (Object.keys(obj).length === 0) return ''
  const queryString = Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&')
  return '?' + queryString
}
