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

var things = require(path.join('../','./lib','things.js'));

describe('Things', function(){
    it('is defined', function(){
      console.log()
      things.should.be.a('Object');
    });
    
    
    it('Should have method read', function(){
      things.read.should.be.a('function');
    });
    it('Should have method update', function(){
      things.update.should.be.a('function');
    });
});
