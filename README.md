# Webdash Performance Budget

![Performance budget preview](https://i.imgur.com/vkkVUdl.png)

```bash
npm install --save-dev webdash-performance-budget
```

## Features

* Keep track of your budget
* Customize your budget
* Get warned when you exceed your budget

## Configuration

This plugin looks for `jsBudgetPath` in your `webdash.json` configuration file, and defaults to `./dist/*.js` if it's not set.

You may need to fix your `jsBudgetPath` for this plugin to work.

The default budget limit is set to 200kb, which is defined in `webdash.json` as `jsBudgetLimit`.

## Enjoying webdash?

Say Hi on Twitter: [@JoubranJad](https://twitter.com/JoubranJad)
