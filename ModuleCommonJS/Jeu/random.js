const getRandom = function() {
    return Math.random();
};

const getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
};

const getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};

exports.get = getRandom;
exports.getArbitrary = getRandomArbitrary;
exports.getInt = getRandomInt;
exports.getIntInclusive = getRandomIntInclusive;