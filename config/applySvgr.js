function applySvgr(config) {
  const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
  if (fileLoaderRule) {
    fileLoaderRule.exclude = /\.svg$/;
  }

  config.module.rules.push({
    test: /\.svg$/,
    enforce: 'pre',
    loader: require.resolve('@svgr/webpack'),
  });
}

module.exports = {
  applySvgr
}
