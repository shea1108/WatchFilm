const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // Proxy configuration for development server
  devServer: {
    proxy: {
      '/home': {
        target: 'http://localhost:3000', // Ensure backend is running on port 3000
        changeOrigin: true,
      },
      '/watch': {
        target: 'http://localhost:3000', // Ensure backend is running on port 3000
        changeOrigin: true,
      }
    }
  }


});
