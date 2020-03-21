const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  webpack(config, env) {
    if (env.production) {
      config.output.publicPath = '/lockdown/';
      const htmlPlugin = config.plugins.find(plugin => plugin instanceof HtmlWebpackPlugin);
      htmlPlugin.options.template = require.resolve('./github-pages.index.html');
    }
  }
};
