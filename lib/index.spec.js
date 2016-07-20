/* global describe, it */

var expect = require('chai').expect
var emberSoFresh = require('./index')

describe('ember so fresh', function () {
  it('should export a function', function () {
    expect(emberSoFresh).to.be.a('function')
  })
})
