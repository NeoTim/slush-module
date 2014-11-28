/*
 * demo
 * https://github.com/JoelCoxOKC/demo
 *
 * Copyright (c) 2014 joelcoxokc
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
var path = require('path');
chai.expect();
chai.should();

var api = require(path.join('../','./lib','api.js'));



describe('Api', function(){
    it('is defined', function(){
      api 
        .should.be.a('Object');
    });
    
    
    it('Should have method read', function(){
      api.read.should.be.a('function');
    });
    it('Should have method update', function(){
      api.update.should.be.a('function');
    });
});
