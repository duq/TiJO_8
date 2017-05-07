'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('sth', function(){
        expect(app.reverseNumber(2468)).to.eql(8642);
    });
    it('sth', function(){
        expect(app.reverseNumber("totallynotanumber")).to.eql(false);
    });
});

describe('returnOnlyLetter', function ()
{
    it('sth', function(){
        expect(app.returnOnlyLetter("2ez")).to.eql("ez");

    });
    it('sth', function(){
        expect(app.returnOnlyLetter("asdf2")).to.eql("asdf");

    });
    it('sth', function(){
        expect(app.returnOnlyLetter(123)).to.eql(false);

    });
});

describe('isEmail', function ()
{
    it('sth', function(){
        expect(app.isEmail("foo@gmail.com")).to.eql(true);
    });
    it('sth', function(){
        expect(app.isEmail("asdfqweqew")).to.eql(false);
    });
});
