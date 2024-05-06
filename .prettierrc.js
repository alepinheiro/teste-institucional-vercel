/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: '*.vue, *.css, *.scss, *.html',
      options: {
        parser: 'vue, html, css, scss',
      },
    },
  ],
};

export default config;
