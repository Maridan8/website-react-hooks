# Website with React Hooks, Styled Components & Gatsby

Learn how I built my own site with **React Hooks** using _Gatsby_, _Netlify_, _Vercel_, and advanced CSS techniques with _Styled Components_.

---

**NOTE:**
This repository is under construction.

---

![displayXDR](hero-section.png)

## Gatsby

Gatsby is a framework built on top of React with essential features such as pages, templates, search engine optimization, etc. Think of it as a Wordpress for React where you can easily pick pre-made templates and plugins if you choose to. It has useful plugins for Contentful and Netlify.

We'll use Gatsby mainly for its performance, routing and SEO. To install, type this command in the terminal.

```
npm install -g gatsby-cli
```

## React Hooks

**React** is by far the **most popular** javascript framework for modern web development. Hooks make React even simpler by allowing you to create functional components using states without writing complex classes. Think of Hooks as `plugins`, where you can update your states with a single line of code. The main ones provided are `useState` and `useEffect` for controlling the lifecycle of your component, replacing the `componentDidMount` and `componentDidUpdate` altogether.

## Styled Components

CSS by itself is the simplest way to create layouts. But with the **components** approach where you want things to be reusable and adaptive, it becomes hard not to rely on frameworks like _Sass_ and javascript _inline styling_. That's where **Styled Components** come in. With it, you can write cleaner, reusable CSS, without extremely long class names or a dedicated css file for each component, and with the power of nesting in _Sass_ and scripting with _React Props_.

## CMS

**CMS** stands for _Content Management System_. This platform allows you to easily manage content and create websites. A website without a CMS would have a lot of hard-coded data as you can see in the previous section.

There's a few reasons why you would need this platform:

1. If your website has multiple pages and needs to be updated often. The website will automatically update when you change the data in the CMS, rather than changing the code every time. Someone in your team can update the content without any coding knowledge.
2. Easier teamwork. You can manage and update the content faster and more efficient. You can also have multiple collaborators working on the project at the same time.
3. Integration, supports tons of third-party services.
4. Makes testing phase really fast and easy.

## Quick start

1. Start developing

Navigate into your new site’s directory and start it up.

```
cd joaocarlosmag-website/
gatsby develop
```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

---

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
