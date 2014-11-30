/*
 * testing-demo
 * https://github.com/joelcoxokc/testing-demo
 *
 * Copyright (c) 2014 joelcoxokc
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var testingDemo = require('../lib/testing-demo.js');

describe('testingDemo', function(){
    it('is defined', function(){
      testingDemo.should.be.a('function');
    });

});
