import config from "./tasks/config";
import webpack from 'webpack';

module.exports = {
  mode: config.env,
  entry: [`./${config.scripts.srcRoot}/app.js`],
  output: {
    filename: `bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
        "node_modules"
    ],
    alias: {
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: 'jquery',
        jquery: "jquery",
        'window.jQuery': "jquery",
    })
  ],
},
null, function(err, stats) {
  /* Use stats to do more things if needed */
  if (stats.compilation.errors.length) {
      notify.onError({
          title: 'Webpack error',
          message: stats.compilation.errors[0].error,
          sound: 'Frog',
      });
  }
};

if (config.isDevelopment) {
  module.exports.devtool = 'source-map';
}
