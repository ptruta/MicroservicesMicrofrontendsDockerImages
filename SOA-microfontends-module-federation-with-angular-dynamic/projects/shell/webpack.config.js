const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "../../tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
    // scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
    extensions: [".js", ".jsx"],
  },
  devServer: {
    compress: true,
    allowedHosts: "all",
    https: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // No remotes configured upfront anymore
      remotes: {
        mfe1: "mfe1@http://localhost:3000/remoteEntry.js",
        mfe2: "mfe2@http://localhost:3001/remoteEntry.js",
        // shell: "shell@http://localhost:5000",
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
