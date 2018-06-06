
module.exports = {
  mode: "development",
  devtool: "cheap-eval-source-map",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.js/, 
        use: { 
          loader: 'babel-loader' 
        },
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ]
      }
    ]
  }
}