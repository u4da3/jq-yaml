'use strict';
var jsyaml = require('js-yaml');
var jQuery = global.jQuery;

(function(jQuery){
  jQuery.extend({

  	getYAML: function(url, data, callback) {
        jQuery.get(url, data, function(yaml, textStatus, jqXHR){
            callback(jQuery.parseYAML(yaml), textStatus, jqXHR);
        }, "text");
      },

  	parseYAML: function(data) {
        return jsyaml.safeLoad(data);
      }
  });
})(jQuery);
