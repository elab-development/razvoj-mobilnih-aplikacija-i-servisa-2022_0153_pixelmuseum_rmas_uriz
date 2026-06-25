const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Block expo-router entirely from being bundled
config.resolver.blockList = [
  ...config.resolver.blockList,
  /node_modules\/expo-router\//,
  /node_modules\/@expo\/router-server\//,
];

// Explicitly prevent expo-router imports
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  "expo-router": path.resolve(__dirname, "./node_modules/expo-router"),
};

module.exports = config;
