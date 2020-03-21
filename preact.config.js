export default {
  webpack(config, env) {
    if (env.production) {
      config.output.publicPath = '/lockdown/';
    }
  }
};
