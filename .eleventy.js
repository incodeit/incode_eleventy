// inspired by https://github.com/webpixels/bootstrap-starter-kit
const markdownIt = require("markdown-it");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(config) {
  config.addPassthroughCopy('src/assets')
  config.addPassthroughCopy('src/llms.txt')
  config.addPassthroughCopy('src/llms-full.txt')
  config.addPassthroughCopy('src/robots.txt')
  config.addWatchTarget("./src/");
  config.addWatchTarget("./src/css");
  config.addLayoutAlias("layout1", "layout1.njk");

  // Safe JSON for AEO schema templates
  config.addFilter("dump", (value) => JSON.stringify(value));

  config.addPlugin(EleventyRenderPlugin);

  config.addCollection("works",(collection) => {
    return collection.getFilteredByGlob("./src/content/works/*.md")
    .map(element => {
      element.data = Object.assign({ // default
        ord: 0,
        visible: true,
      }, element.data);
      return element;
    })
    .filter(element => element.data.visible)
    .sort((a, b) => b.data.ord - a.data.ord)
  });

 config.addShortcode("year_current", () => `${new Date().getFullYear()}`);

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
