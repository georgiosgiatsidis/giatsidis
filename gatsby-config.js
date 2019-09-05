module.exports = {
    siteMetadata: {
        title: `Georgios Giatsidis`,
        description: `Software Engineer`,
        author: `@georgegiatsidis`,
        menuLinks: [
            {
                name: 'home',
                link: '/',
            },
            {
                name: 'page2',
                link: 'page-2',
            },
            {
                name: 'page3',
                link: 'page-3',
            },
            {
                name: 'page4',
                link: 'page-4',
            },
            {
                name: 'page5',
                link: 'page-5',
            },
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
    ],
};
