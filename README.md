# Code to Food Engineering Blog

Engineering blog originally templated from this [Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-blog).

https://imperfectproduce.github.io/

## Useful References

- [Popular engineering team blogs](http://www.quickcode.co/engineer-blogs)
- [Process for development & deployment](http://iolivia.me/posts/7-gatsby-deploy-github/)

## Adding A Blog Post

Process taken from this article: http://iolivia.me/posts/7-gatsby-deploy-github/

Do your active work on the `master-source` branch. When done, commit and push your changes to `master-source`. The `master` branch will hold all of the generated static site code, whereas `master-source` is a reserved branch for development and our actual changes.

`gco -b master-source`

Checkout the local node version: `nvm use`

Install dependencies: `yarn`

Add a new folder and file in `/content/{page-name}/index.md`.

Run locally with `npm run develop` and hit `localhost:8000`

When ready to commit, commit and push to `master-source`:
  - `git push --set-upstream origin master-source`

## 💫 Deployment to GH Pages
Run deployment on `master-source`, which will push the generated site code to the `master` branch.
`npm run deploy`

The site is accessible here https://imperfectproduce.github.io/

# Gatsby Documentation
## 🚀 Quick Start (Development)

1.  **Install gatsby-cli globally.**

    ```sh
    $ npm install --global gatsby-cli
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up. Use at least latest version of node v8.

    ```sh
    $ cd to/dev-blog/directory
    $ yarn # install deps
    $ gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Code changes causes the browser will update in real time (eg edit `src/pages/index.js`).

## 🧐 What's Inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`/content`**: This directory houses repository stored content that is used in when building the static site.

4.  **`/public`**: This directory houses the built static files that the CDN serves.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.


# Previous documentation ported over from Code-to-food repo, about Netlify deployments
## 💫 Deployment (Netlify)

[![Netlify Status](https://api.netlify.com/api/v1/badges/49f8552e-b4c1-4652-8015-6fabd2da749c/deploy-status)](https://app.netlify.com/sites/affectionate-easley-e21530/deploys)

#### Triggering Deployments
Pushes to master automatically build and deploy the site.

It is also possible to set up hooks in Netlify to trigger builds.  The main use case is
changing content in an external data source such as a headless CMS (eg Prismic).

#### PR Previews
Netlify also supports preview deployments of PR's.
