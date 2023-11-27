module.exports = {
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:vuejs-accessibility/recommended'
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
    'vuejs-accessibility'
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'vuejs-accessibility/label-has-for': [
      "error",
      {
        "components": [],
        "controlComponents": [],
        "required": {
          "every": [ "id"]
        },
        "allowChildren": false
      }
    ]
  },
}
