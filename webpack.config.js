module.exports = {
  entry:  ['webpack/hot/dev-server', './assets/index.js'],
  output: {
    path:      __dirname + '/public',
    filename: 'build/bundle.js',
  },
  module: {
    loaders: [
      {
        test:   /\.(js|jsx)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        loaders: ["style", "css", "sass"]
      }
    ],
  },
  resolve: {
    modulesDirectories: [__dirname + "/node_modules"]
  }
};
