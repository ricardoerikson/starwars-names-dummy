import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';
import _ from 'lodash';

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
    if(number === undefined || number == 0) {
        return [];
    }
    if (number > starWarsNames.length) {
        return _.uniq(starWarsNames.all);
    }
    var randomItems = [];
    do {
        randomItems.push(getRandomItem());
        randomItems = _.uniq(randomItems);
    } while(randomItems.length < number );
    return randomItems;
}