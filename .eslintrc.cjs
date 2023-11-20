module.exports = {
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:lit-a11y/recommended'
  ],
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'lit-a11y'
  ],
  rules: {
    'vue/multi-word-component-names': 0
  },
}
