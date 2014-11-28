(function(){
  /*
   * Things
   * https://github.com/JoelCoxOKC/demo
   *
   * Copyright (c) 2014 JoelCoxOKC
   * Licensed under the MIT license.
   */

  'use strict';

  var Things = module.exports = (function() {
    'use strict';

    var instance;

    function Things(args) {
      
      /**
       * [one description]
       * @param  {[type]}   params   [description]
       * @param  {Function} callback [description]
       * @return {[type]}            [description]
       */
      function one ( params, cb ){

      }
      /**
       * [two description]
       * @param  {[type]}   params   [description]
       * @param  {Function} callback [description]
       * @return {[type]}            [description]
       */
      function two ( params, cb ){

      }
      return {
        
        /**
         * [read description]
         * @param  {[type]}   params   [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        read: function (params, cb) {
          // method body
        },
        /**
         * [update description]
         * @param  {[type]}   params   [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        update: function (params, cb) {
          // method body
        }
      };

    }
    if(!instance){
      return instance = Things();
    }

    return instance;

  }());


})();



