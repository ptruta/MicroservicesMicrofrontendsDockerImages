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
    uniqueName: "mfe1",
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

      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./projects/mfe1/src/app/app.component.ts",
        "./Module": "./projects/mfe1/src/app/domains/domains.module.ts",
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
