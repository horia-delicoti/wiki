[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)][mit]
[![Docusaurus](https://img.shields.io/badge/Docs-Docusaurus-blue.svg)][docusaurus]

<h1 align="center">📘 My personal Wiki</h1>
<p align="center">
<a href="https://github.com/horia-delicoti/wiki"><img src="./images/wiki_logo.png" width="100"/></a><br>
<i>This repo contains the source code for my personal wiki website</i>
<br />
<i>A website built with <a href="https://docusaurus.io/">(Docusaurus)</a> </i>
<br />
<b> 🔗 <a href="https://wiki.horia.delicoti.com"><code>wiki.horia.delicoti.com</code></a></b> <br/>
</p>

## 💡 Motive

A digital garden where I collect, organize, and share everything I learn about technology, DevOps, programming, and beyond.

## 🧠 About

The content is defined in Markdown files located in the `docs/` directory. The site is built with Docusaurus and lives on GitHub.

## 🚀 Getting Started

### ⚙️ Prerequisites

- [Node.js](https://nodejs.org/en/download) (>= 20.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 💻 Installation

Clone the repository:

```sh
git clone https://github.com/horia-delicoti/wiki.git
cd wiki
```

Install dependencies:

```sh
npm install
```

### 🧪 Local Development

<details>
  <summary>Starts the development server</summary>

  `npm start` → `docusaurus start`

  ### Features:

  * Hot Reloading: Automatically refreshes when you make changes to your source files
  * Error Overlay: Displays helpful error messages in the browser when something goes wrong.
  * Debugging: Provides detailed stack traces and debugging information.
  * Faster Build Times: Optimized for quick feedback during development.

  <i>Use case: When you're actively developing and want to see changes immediately without manually refreshing the browser.</i>

</details>

```sh
npm start
```

### 🏗️ Production Build

<details>
  <summary>Bundles your website into static files for production</summary>

  `npm run build` → `docusaurus build`

  ### Features:

  * **Static Site Generation (SSG)**: Pre-renders all pages at build time for optimal performance and SEO
  * **Code Splitting**: Automatically splits JavaScript bundles by routes and components for faster loading
  * **Tree Shaking**: Removes unused code from the final bundle to reduce file sizes
  * **Minification**: Compresses HTML, CSS, and JavaScript files for optimal delivery
  * **Asset Optimization**: Optimizes images and static assets with content hashing for cache busting
  * **Bundle Analysis**: Creates optimized chunks with intelligent caching strategies
  * **Sitemap Generation**: Automatically creates `sitemap.xml` and RSS feeds for search engines
  * **Service Worker**: Generates offline functionality files (if enabled)

  <i>Use case: Preparing your website for deployment with maximum performance optimizations and SEO benefits.</i>

</details>

```sh
npm run build
```

<details>
  <summary>Serves the built website locally.</summary>

  `npm run serve` → `docusaurus serve`

  ### Features:

  * Serves the optimized production build of your website.
  * No hot reloading; serves static files as they are. You need to rebuild if you make changes.
  * Production optimizations: Minification, code splitting, and other optimizations for better performance.
  * Exactly what the users will see in production.

  <i>Use case: Testing your production build locally before deploying.</i>

</details>

```sh
npm run serve
```

### 🚀 Deployment

<details>
  <summary>Deploys the website to GitHub Pages</summary>

  `npm run deploy` → `docusaurus deploy`

  ### Technical Process:

  * **Automated Build**: Automatically runs `docusaurus build` to generate production files
  * **Git Integration**: Creates or switches to the `gh-pages` branch in your repository
  * **File Deployment**: Pushes the entire `build/` directory contents to the `gh-pages` branch
  * **GitHub Pages Activation**: Automatically configures GitHub Pages to serve from the `gh-pages` branch
  * **Domain Configuration**: Supports custom domains via `CNAME` file generation
  * **History Management**: Maintains deployment history and rollback capabilities
  * **CI/CD Compatible**: Works seamlessly with GitHub Actions and other CI/CD pipelines

  ### Prerequisites:
  * Repository must be configured with GitHub Pages settings
  * `organizationName` and `projectName` must be set in `docusaurus.config.js`
  * Git remote must be properly configured and authenticated

  <i>Use case: Automated deployment to GitHub Pages with zero-downtime and built-in rollback support.</i>

</details>

```sh
npm run deploy
```

### 📸 Screenshot

## 🤝 Contributing

No need to contribute or raise issues. Just fork the repo and make the changes you need for your own wiki page.

## 🙌 Attributions

![contributors badge](https://readme-contribs.as93.net/contributors/horia-delicoti/wiki)

## 🫡 Acknowledgements

- [Nikiv Dev's Dev Wiki](https://nikiv.dev/)
- [Paul Copplestone's Knowledge Wiki](https://paul.copplest.one/knowledge/)
- [GitHub Topic: Meta Knowledge](https://github.com/RichardLitt/meta-knowledge?tab=readme-ov-file)
- [Brendex](https://ltkmn.gitbook.io/brendex/)
- [The Blue Book](https://lyz-code.github.io/blue-book/)
- [Today I Learned](https://til.secretgeek.net/)
- [Knowledge Lardissone](https://knowledge-lardissone.vercel.app/#about-me)
- [Mister Micheels' Learning Notes](https://learning-notes.mistermicheels.com/about/about/)
- [Allan MacGregor's Obsidian Publish](https://publish.obsidian.md/allanmacgregor/Meta/Index)
- [Anthony Amar's Personal Wiki](https://anthonyamar.fr/Welcome+in+my+mind+%F0%9F%A7%A0)

## 📚 Resources

### ⚙️ Build & Utility Tools

- [Docusaurus](https://docusaurus.io/docs) - An open-source static site generator that makes it easy to build and maintain open source project websites.
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [npm](https://www.npmjs.com/) - A package manager for JavaScript.
- [Task](https://taskfile.dev/) - A simple task runner / build tool that aims to be simpler and easier to use than Make.
- [Shields.io](https://shields.io/) - A service that provides a simple way to create consistent and customizable badges for open source projects.

## ⚖️ License

This project is licensed under the [MIT][mit] License. See the [LICENSE](/LICENSE) file for details.

<!-- License + Copyright -->
<p  align="center">
  <i>© <a href="https://horia.delicoti.com">Horia Delicoti</a> 2025</i><br>
  <i>Licensed under <a href="https://www.tldrlegal.com/license/mit-license">MIT</a></i><br>
  <a href="https://github.com/horia-delicoti"><img src="./images/octocat_spiderman.png" width="100" /></a><br>
  <sup>Happy exploring 🙂</sup>
</p>

<!-- Links -->
[mit]: https://opensource.org/licenses/MIT
[docusaurus]: https://docusaurus.io/

<!-- Knowledge Hive -->
<!--
       _______
      /      /,
     /      //
    /______//
   (______(/
     ||  ||
     ||  ||   Projects 🛠️
     ||  ||   Knowledge 📚
     ||  ||   Wiki 📝
-->