module.exports = {
  base: "/mela-store/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" }
    ],
    sidebar: [
      {
        title: "Home", // required
        path: "", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [["/", "Hello There"]]
      },
      {
        title: "Components",
        path: "/components/",
        collapsable: false, // optional, defaults to true
        // sidebarDepth: 1, // optional, defaults to 1
        children: [["/components/ShoppingCart", "Shopping Cart"]]
      }
    ],
    // sidebarDepth: 2,

    displayAllHeaders: true, // Default: false,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "dev-melatech/mela-store",
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: "Contribute!",

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: "dev-melatech/mela-store",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!"
  },
  plugins: [
    [
      "register-components",
      {
        componentsDir: "../../src/components/"
      }
    ]
  ]
};
