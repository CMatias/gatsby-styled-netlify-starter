const activeEnv =
  process.env.GATSBY_ENV || process.env.NODE_ENV || 'development';

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/assets`
    }
  },
  'gatsby-plugin-sitemap',
  'gatsby-transformer-sharp',
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
      icon: `src/assets/gatsby-icon.png` // This path is relative to the root of the site.
    }
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /src\/assets\/svg/
      }
    }
  },
  'gatsby-plugin-netlify',
  {
    resolve: 'gatsby-plugin-netlify-cache',
    options: {
      extraDirsToCache: ['public/static']
    }
  }
];

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description:
      'An opinionated Gatsby starter with Styled Components, SEO, Netlify integration, Google Tags and Eslint',
    author: `@cmatias`,
    siteUrl: `https://www.gatsbyjs.org`
  },
  plugins:
    activeEnv === 'production'
      ? [
          ...plugins
          // {
          //   resolve: `gatsby-plugin-google-gtag`,
          //   options: {
          //     trackingIds: ['ID'],
          //     // This object gets passed directly to the gtag config command
          //     // This config will be shared accross all trackingIds
          //     gtagConfig: {
          //       anonymize_ip: true,
          //       cookie_expires: 0
          //     },
          //     // This object is used for configuration specific to this plugin
          //     pluginConfig: {
          //       // Puts tracking script in the head instead of the body
          //       head: false,
          //       // Setting this parameter is also optional
          //       respectDNT: true
          //     }
          //   }
          // }
        ]
      : plugins
};
