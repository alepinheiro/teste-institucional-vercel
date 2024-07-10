export const useGoogleTagManager = (
  w: Window,
  d: Document,
  s: string,
  l: keyof Window,
  i: string,
) => {
  // @ts-expect-error
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0] as HTMLScriptElement,
    j = d.createElement(s) as HTMLScriptElement,
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode?.insertBefore(j, f);
};
