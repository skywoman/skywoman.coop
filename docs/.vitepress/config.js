const content = require('@originjs/vite-plugin-content').default;

module.exports = {
  title: 'skywoman.coop',
  description: 'a platform for communities to develop their food sovereignty.',
  vite: {
    plugins: [
      content(),
    ],
  },
};
