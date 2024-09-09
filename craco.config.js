module.exports = {
  webpack: {
    configure: {
      optimization: {
        splitChunks: {
          cacheGroups: {
            default: false,
          },
        },
      },
      output: {
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].chunk.js",
      },
    },
  },
};
