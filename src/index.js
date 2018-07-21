'use strict';
var jsyaml = require('js-yaml');
var jQuery = global.jQuery;

(function(jQuery){
  jQuery.extend({

    getYAML: function(url, param, callback) {
      jQuery.get(url, param, function(yaml, textStatus, jqXHR){
          callback(jQuery.parseYAML(yaml), textStatus, jqXHR);
      }, "text");
    },

    parseYAML: function(data) {
      return jsyaml.safeLoad(data);
    }
  });
})(jQuery);
