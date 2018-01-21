export const babelrc = {
  presets: ['@babel/preset-env', 'vue'],
  plugins: ['jsx-event-modifiers', 'jsx-v-model', 'transform-vue-jsx']
};

export const dependencies = [
  'babel-cli',
  '@babel/preset-env',
  'babel-preset-vue',
  'babel-plugin-jsx-event-modifiers',
  'babel-plugin-jsx-v-model',
  'babel-plugin-transform-vue-jsx'
];
