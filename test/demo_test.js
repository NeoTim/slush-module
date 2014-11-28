/*
 * demo
 * https://github.com//demo
 *
 * Copyright (c) 2014 joelcoxokc
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var demo = require('../lib/demo.js');

describe('demo', function(){
    it('is defined', function(){
      demo.should.be.a('function');
    });

});
