"use strict";

var config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'SINA KAFI',
    description: 'SINA KAFI is a software Developer .',
    siteUrl: 'https://brittanychiang.com',
    image: '/photo.png',
    // Path to your image you placed in the 'static' folder
    twitterUsername: '@bchiang7'
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-styled-components", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", "gatsby-plugin-robots-txt", {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: 'SINA KAFI',
      short_name: 'SinaKafi',
      start_url: '/',
      background_color: config.colors.darkNavy,
      theme_color: config.colors.navy,
      display: 'minimal-ui',
      icon: 'src/images/logo.png'
    }
  }, "gatsby-plugin-offline", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: "".concat(__dirname, "/content/")
    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: "".concat(__dirname, "/content/posts")
    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "projects",
      path: "".concat(__dirname, "/content/projects")
    }
  }, {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [{
        resolve: 'gatsby-remark-external-links',
        options: {
          target: '_blank',
          rel: 'nofollow noopener noreferrer'
        }
      }, {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 700,
          linkImagesToOriginal: true,
          quality: 90,
          tracedSVG: {
            color: config.colors.green
          }
        }
      }, {
        resolve: 'gatsby-remark-code-titles'
      }, {
        resolve: "gatsby-remark-prismjs",
        options: {
          classPrefix: 'language-',
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: true,
          noInlineHighlight: false,
          languageExtensions: [{
            language: 'superscript',
            extend: 'javascript',
            definition: {
              superscript_types: /(SuperType)/
            },
            insertBefore: {
              "function": {
                superscript_keywords: /(superif|superelse)/
              }
            }
          }],
          prompt: {
            user: 'root',
            host: 'localhost',
            global: false
          }
        }
      }]
    }
  }, {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: 'UA-45666519-2'
    }
  }]
};