/*
 * slush-module
 * https://github.com/JoelCoxOKC/slush-module
 *
 * Copyright (c) 2014 joelcoxokc
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var slushModule = require('../lib/slush-module.js');
// var mod = new slushModule;

describe('slushModule', function(){
    it('is defined', function(){
      console.log(slushModule)
      slushModule.should.be.a('function');
    });

});
