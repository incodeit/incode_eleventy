// inspired by https://github.com/webpixels/bootstrap-starter-kit

const markdownIt = require("markdown-it");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(config) {
  config.addPassthroughCopy('src/assets')
  config.addWatchTarget("./src/");
  config.addWatchTarget("./src/scss");
  config.addLayoutAlias("layout1", "layout1.njk");

  config.addPlugin(EleventyRenderPlugin);

  config.addCollection("works",(collection) => {
    return collection.getFilteredByGlob("./src/content/works/*.md");
  });

  /*
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  config.setLibrary("md", markdownIt(options));
  */

  return { 
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "data",
          },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    //passthroughFileCopy: true
  };
}
