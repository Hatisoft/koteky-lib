var chai = require('chai');
var expect = require('chai').expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var provider = require('../lib/provider');

var before = function(){

};

var testOnInitialize = function(){
    //TODO: add unit tests
};

describe('Post Initialization', function(){
    before(before);
    it ('test initialization', testOnInitialize);
});
