'use strict';

angular.module('mgcrea.ngStrap.helpers.utils', [])

  .factory('$utils', function($document, $window) {

    var fn = {};

    fn.isIE = function() {
      var ua = $window.navigator.userAgent;
      return ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/') > 0;
    };

    fn.selectScrollFix = function(e) {
      if ($document[0].activeElement.tagName === 'UL') {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.target.focus();
      }
    };
    
    return fn;

  });
