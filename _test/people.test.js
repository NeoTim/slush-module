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

var people = require(path.join('../','./lib','people.js'));

describe('People', function(){
    it('is defined', function(){
      people.should.be.a('Object');
    });
    
    
    it('Should have method read', function(){
      people.read.should.be.a('function');
    });
    it('Should have method update', function(){
      people.update.should.be.a('function');
    });
});
