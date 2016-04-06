var chai = require('chai');
var expect = require('chai').expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var postIsExported = function(){
    var post = require('../index').post;
    date = new Date(2011, 0, 1, 2, 3, 4, 567);
    origin = "Twitter";
    owner = "Jhon";
    content = "Loren Ipsum Troloro";
    var localPost = new post(date, origin, owner, content);
};

describe('Module Exports', function(){
    it ('post is exported', postIsExported);
});
