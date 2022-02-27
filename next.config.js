const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = withFrameworkConfig({
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

console.log("next.config.js", JSON.stringify(nextConfig, null, 2));

module.exports = nextConfig;
