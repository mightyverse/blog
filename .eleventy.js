module.exports = function (eleventyConfig) {
    // // Alias `layout: post` to `layout: layouts/post.njk`
    // eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
    // eleventyConfig.addLayoutAlias("base", "layouts/base.liquid");
    // // Copy the `uploads/` directory
    // eleventyConfig.addPassthroughCopy("uploads");


    return {
        passthroughFileCopy: true,
        dir: {
            // --passthroughall temporary hack to repro exact static site
            input: "./blog.mightyverse.com",   // source files
            output: "./_site" // static site generated here
        }
    };
};