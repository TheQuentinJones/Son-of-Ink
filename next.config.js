// next.config.js

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },

  // Include Tailwind CSS
  css: ['tailwind.css'],
};

module.exports = nextConfig;
