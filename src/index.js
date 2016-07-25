var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
    all: starWarsNames,
    random: random,
    randomArrayWithoutRepeat: randomArrayWithoutRepeat
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}

function randomArrayWithoutRepeat(number) {
    if (number > starWarsNames.length) {
        return Array.from(new Set(starWarsNames.all));
    }
    var randomItems = [];
    do {
        var item = getRandomItem();
        var repeated = randomItems.some(function(element) {
            return element == item;
        });
        if (!repeated) {
            randomItems.push(item);
        }
    } while(randomItems.length < number );
    return randomItems;
}