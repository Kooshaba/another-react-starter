var config = {
  entry:  ['./src/Index.js'],
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

if(process.env.NODE_ENV === 'development') {
  config.entry.unshift('webpack/hot/dev-server');
}

module.exports = config;
