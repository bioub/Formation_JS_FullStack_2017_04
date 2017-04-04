var addition = function(a, b) {
    return a + b;
};

console.log(addition(1, 2));
console.log(addition('1', '2'));
console.log(addition(1, 2, 3, 4));
console.log(addition(1));

// Validation de params
var addition = function(a, b) {
    if (arguments.length !== 2) {
        throw new Error('addition needs 2 params');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('addition needs 2 numbers');
    }
    return a + b;
};

try {
    addition(1);
}
catch(err) {
    console.log(err.message);
}

// Fonction variadique
var addition = function(a, b) {
    var somme = Number(a) + Number(b);

    for (var i = 2; i < arguments.length; i++) {
        somme += Number(arguments[i]);
    }

    return somme;
};

var addition = function(a, b, ...c) {
    var somme = Number(a) + Number(b);

    c.forEach(function(nb) {
        somme += Number(nb);
    });

    return somme;
};

var addition = function(...nbs) {
    return nbs.reduce((acc, nb) => acc + nb);
};

console.log(addition(1, 2));
console.log(addition(1, 2, 3));
console.log(addition(1, 2, 3, 4));

// Fonctionnement du reduce
// nbs === [1, 2, 3, 4]
// acc === 1, nb === 2, return 3
// acc === 3, nb === 3, return 6
// acc === 6, nb === 4, return 10

// Valeur par défaut
var addition = function(a, b) {
    if (b === undefined) {
        b = 0;
    }
    return a + b;
};

var addition = function(a, b) {
    b = b || 0;
    return a + b;
};

// ES6 default param
var addition = function(a, b = 0) {
    return a + b;
};

var logClosure = function(msg) {

    return function() {
        console.log(msg);
    };
};

var logHello = logClosure('Hello');
console.log(typeof logHello); // function
logHello();
var logCoucou = logClosure('Coucou');
logCoucou();