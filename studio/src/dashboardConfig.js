export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63186dc1c6afe714393702c0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-w8pz47nj",
                  apiId: "94b0f520-e656-4bd9-93f1-87db86bfa609",
                },
                {
                  buildHookId: "63186dc21b878523664f4ca7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kw1q4q1v",
                  apiId: "96707b99-bf60-4bd9-ac14-84536d0cabcb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hostgsr/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kw1q4q1v.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
