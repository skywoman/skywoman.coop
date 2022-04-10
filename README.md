# skywoman.coop
A first draft for the [proposed Skywoman website](https://github.com/somethingelse-skywoman/about/discussions/1).

## Quick start
You will need [Node.js](https://nodejs.org) and [git](https://git-scm.com/) installed as a prerequisite.

In your terminal, clone this repository and `cd` into the repo:

```sh
git clone https://github.com/somethingelse-skywoman/skywoman.coop.git
cd skywoman.coop
```

Install the Node dependencies:

```sh
npm i
```

Start the local development server:

```sh
npm start
```

In your terminal you should now see the dev server start up, with hot reloading enabled:

```sh
> skywoman.coop@1.0.0 start
> npm run docs:dev


> skywoman.coop@1.0.0 docs:dev
> vitepress dev docs

vitepress v0.22.3

  > Local: http://localhost:3000/
  > Network: use `--host` to expose
```

Open your browser to https://localhost:3000/. When you save any changes in the `docs/` directory, you should see those changes automatically propagated to the browser window.

## Content
Content can be added by creating new markdown files and/or directories in `docs/`, which will be mapped to corresponding routes.

Currently, there is just one page, `./docs/index.md`, which is setup as a single landing page, with pods represented in the `./docs/pods.yml` file. 

## Development
The site is made with [VitePress](https://vitepress.vuejs.org/), which transforms Markdown files to HTML and supports templating with [Vue.js](https://vuejs.org/) out-of-the-box. See the VitePress docs on ["Using Vue in Markdown"](https://vitepress.vuejs.org/guide/using-vue.html) for the specifics on Markdown interpolation.

Support for loading YAML, JSON and other data formats is provided by the Vite plugin, [`vite-plugin-content`](https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-content).

See the documentation pages for VitePress and Vue.js for further information on how to customize the layout and configuration.

### Theme
For now, the default VitePress theme is being overridden by `./theme/index.js`, but the default can be re-enabled or extended if we wish. See the VitePress docs on ["Theming"](https://vitepress.vuejs.org/guide/theming.html) for more information.
