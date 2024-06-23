/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

function withMonorepoPaths() {
  return {
    // #1 - Watch all files in the monorepo
    watchFolders: [workspaceRoot],
    resolver: {
      // #2 - Resolve modules within the project's `node_modules` first, then all monorepo modules
      nodeModulesPaths: [
        path.resolve(projectRoot, "node_modules"),
        path.resolve(workspaceRoot, "node_modules"),
      ],
    },
  };
}

module.exports = mergeConfig(
  getDefaultConfig(projectRoot),
  withMonorepoPaths(),
);
