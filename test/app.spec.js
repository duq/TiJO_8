'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('sth', function(){
        expect(app.reverseNumber(2468)).to.eql(8642);
    });
});

describe('returnOnlyLetter', function ()
{
    it('sth', function(){
        expect(app.reverseNumber(2468)).to.eql(8642);
    });
});

describe('isEmail', function ()
{
    it('sth', function(){
        expect(app.isEmail("foo@gmail.com")).to.eql(true);
    });
});
