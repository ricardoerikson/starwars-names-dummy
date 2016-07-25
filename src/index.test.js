var expect = require('chai').expect;
var starWarsNames = require('./index.js');

describe('starwars-names-lib', function () {
    describe('all', function () {
        it('should be an array of strings', function () {
            expect(starWarsNames.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array) {
                return array.every(function(item){
                    return typeof item === 'string';
                });
            }
        });
        it('should contain `Luke Skywalker`', function () {
            expect(starWarsNames.all).to.contain('Luke Skywalker');
        });
    });

    describe('random', function () {
        it('should return a random item from starWarsNames.all', function () {
            var item = starWarsNames.random();
            expect(starWarsNames.all).to.include(item);
        });

        it('should return an array of random items if passed a number', function () {
            var randomItems = starWarsNames.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(starWarsNames.all).to.include(item);
            });
        });

        it('should return and empty array if passed zero', function () {
            var randomItems = starWarsNames.random(0);
            expect(randomItems).to.have.length(0);
        });
    });
});