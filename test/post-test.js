var chai = require('chai');
var expect = require('chai').expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var post = require('../lib/post');

var before = function(){
    date = new Date(2011, 0, 1, 2, 3, 4, 567);
    origin = "Twitter";
    owner = "Jhon";
    content = "Loren Ipsum Troloro";
};

var testCorrectDate = function(){
    var localPost = new post(date, origin, owner, content);
    expect(localPost.date).to.equal(date);
};

var testCorrectOrigin = function(){
    var localPost = new post(date, origin, owner, content);
    expect(localPost.origin).to.equal(origin);
};

var testCorrectOwner = function(){
    var localPost = new post(date, origin, owner, content);
    expect(localPost.owner).to.equal(owner);
};

var testCorrectContent = function(){
    var localPost = new post(date, origin, owner, content);
    expect(localPost.content).to.equal(content);
};

describe('Post Initialization', function(){
    before(before);
    it ('returns correct date', testCorrectDate);
    it ('returns correct origin', testCorrectOrigin);
    it ('returns correct owner', testCorrectOwner);
    it ('returns correct content', testCorrectContent);
});
