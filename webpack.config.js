const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
// const DIST_DIR = path.join(__dirname, '/client/dist');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/customersAlsoIndex.jsx`,
  output: {
    filename: 'bundle3.js',
    path: DIST_DIR,
  },
  module:
    {
      rules: [
        {
          test: /\.m?jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
};
