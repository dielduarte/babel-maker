# babel-maker
A cli to create initial babel configuration in a easy way

Install globally babel-maker

```
[sudo] npm i -g babel-maker
```

Now run `babel-maker` on folder that you want create intial babel config, see the babel-maker working bellow:

![gif babel-maker working](./babel-maker.gif)

That's it! Choose your template and see the magic happening, babel-maker will create your .babelrc and install all dependencies required.


## Templates

#### Simple

```js
//.babelrc

{
  presets: ['@babel/preset-env']
}

```

#### React Based

```js
//.babelrc

{
  presets: ['@babel/preset-env', 'react']
}

```
#### Vue Based

```js
//.babelrc

{
  presets: ['@babel/preset-env', 'vue'],
  plugins: ['jsx-event-modifiers', 'jsx-v-model', 'transform-vue-jsx']
}

```

