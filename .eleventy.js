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

  // Replace plaintext emails in visible copy with obfuscated links
  config.addFilter("protectEmails", (value) => {
    const encoded = Buffer.from("info@incode.it", "utf8").toString("base64");
    const link = `<a href="#contact" data-email="${encoded}" data-email-show="1" rel="nofollow">Email</a>`;
    return String(value ?? "").replace(/info@incode\.it/gi, link);
  });

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

  // Spam-safe email link: encoded in data-email, hydrated by main.js
  // Usage: {% email_link "Contact us", "button" %}
  //        {% email_link %}  → reveals address as link text after JS
  config.addShortcode("email_link", (text = "", className = "") => {
    const encoded = Buffer.from("info@incode.it", "utf8").toString("base64");
    const showAddress = !text || text === "email";
    const label = showAddress ? "Email" : String(text);
    const classes = className ? ` class="${className}"` : "";
    const showAttr = showAddress ? ' data-email-show="1"' : "";
    return `<a href="#contact"${classes} data-email="${encoded}"${showAttr} rel="nofollow">${label}</a>`;
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
