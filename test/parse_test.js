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
  
  it('should parse log messages into a collection', function() {
    var grunt = require('grunt')
      , expected = grunt.file.readYAML('test/expected/multiple.yml')
      , actual = parser.parse(grunt.file.read('test/fixtures/multiple'));
      expect(actual).to.deep.equal(expected);
  });
  
});