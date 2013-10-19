/*global describe, it, beforeEach */

'use strict';

var expect = require('chai').expect;

describe('SVN Log Parser', function() {
  var Parser = require('../lib/index.js').Parser
    , parser;
  
  beforeEach(function() {
    parser = new Parser();
  });
  
  it('should return an empty array for zero logs', function() {
    var logs = parser.parse('');
    expect(logs).to.be.an('array');
    expect(logs.length).to.equal(0);
  });
  
});