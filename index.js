var loaderUtils = require('loader-utils');
var autoprefixer = require('autoprefixer');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var options = loaderUtils.parseQuery(this.query);
  var browsers = options.browsers ? options.browsers.split(/,\s*/) : null;
  var processed = autoprefixer(browsers).process(source);

  this.callback(null, processed.css, processed.map);
};
