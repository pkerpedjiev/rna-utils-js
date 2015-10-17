/*
 * rna-utils-js
 * https://github.com/pkerpedjiev/rna-utils-js
 *
 * Copyright (c) 2015 Peter Kerpedjiev
 * Licensed under the Apache-2.0 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var js = require('../');

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   

describe('rna-utils-js module', function(){
  describe('#dotbracketToPairtable()', function(){
    it('convert a dotbracket to to a pairtable', function(){

      assert(js.dotbracketToPairtable('((...))').equals( [7,7,6,0,0,0,2,1]));
    });
  });
});
