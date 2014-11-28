(function(){
  /*
   * slush-module
   * https://github.com/JoelCoxOKC/slush-module
   *
   * Copyright (c) 2014 joelcoxokc
   * Licensed under the MIT license.
   */

  'use strict';


  var SlushModule = module.exports = function SlushModule( params ) {

    var _this = this;
    _this.privateGet = function( params, cb ){

    };
    _this.privateSet = function( params, cb ){

    };
    _this.privateRemove = function( params, cb ){

    };
  }

  /**
   * [get description]
   * @param  {[type]}   params   [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  SlushModule.prototype.get = function( params, callback ){
    this.privateGet(param, function ( error, response ){
      if(error) {
        return console.log('!!!Error')
      }
      callback( response );
    });
  };

  /**
   * [set description]
   * @param {[type]}   params   [description]
   * @param {Function} callback [description]
   * @return {[type]}           [description]
   */
  SlushModule.prototype.set = function( params, callback ){
    this.privateSet(param, function ( error, response ){
      if(error) {
        return console.log('!!!Error')
      }
      callback( response );
    });
  };

  /**
   * [remove description]
   * @param  {[type]}   params   [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  SlushModule.prototype.remove = function( params, callback ){
    this.privateRemove(param, function ( error, response ){
      if(error) {
        return console.log('!!!Error')
      }
      callback( response );
    });
  };



})();