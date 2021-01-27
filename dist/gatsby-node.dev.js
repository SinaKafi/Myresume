"use strict";

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
var path = require('path');

var _ = require('lodash');

exports.createPages = function _callee(_ref) {
  var actions, graphql, reporter, createPage, postTemplate, tagTemplate, result, posts, tags;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          actions = _ref.actions, graphql = _ref.graphql, reporter = _ref.reporter;
          createPage = actions.createPage;
          postTemplate = path.resolve("src/templates/post.js");
          tagTemplate = path.resolve('src/templates/tag.js');
          _context.next = 6;
          return regeneratorRuntime.awrap(graphql("\n    {\n      postsRemark: allMarkdownRemark(\n        filter: { fileAbsolutePath: { regex: \"/posts/\" } }\n        sort: { order: DESC, fields: [frontmatter___date] }\n        limit: 1000\n      ) {\n        edges {\n          node {\n            frontmatter {\n              slug\n            }\n          }\n        }\n      }\n      tagsGroup: allMarkdownRemark(limit: 2000) {\n        group(field: frontmatter___tags) {\n          fieldValue\n        }\n      }\n    }\n  "));

        case 6:
          result = _context.sent;

          if (!result.errors) {
            _context.next = 10;
            break;
          }

          reporter.panicOnBuild("Error while running GraphQL query.");
          return _context.abrupt("return");

        case 10:
          // Create post detail pages
          posts = result.data.postsRemark.edges;
          posts.forEach(function (_ref2) {
            var node = _ref2.node;
            createPage({
              path: node.frontmatter.slug,
              component: postTemplate,
              context: {}
            });
          }); // Extract tag data from query

          tags = result.data.tagsGroup.group; // Make tag pages

          tags.forEach(function (tag) {
            createPage({
              path: "/pensieve/tags/".concat(_.kebabCase(tag.fieldValue), "/"),
              component: tagTemplate,
              context: {
                tag: tag.fieldValue
              }
            });
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.onCreateWebpackConfig = function (_ref3) {
  var stage = _ref3.stage,
      loaders = _ref3.loaders,
      actions = _ref3.actions;

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [{
          test: /scrollreveal/,
          use: loaders["null"]()
        }, {
          test: /animejs/,
          use: loaders["null"]()
        }]
      }
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils')
      }
    }
  });
};