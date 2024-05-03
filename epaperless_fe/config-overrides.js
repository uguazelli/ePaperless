const { alias } = require("react-app-rewired"); // Import alias functionality
const path = require("path"); // Import path for resolving paths

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias, // Preserve existing aliases (if any)
    "@": path.resolve(__dirname, "src"), // Configure your alias
  };
  return config;
};
