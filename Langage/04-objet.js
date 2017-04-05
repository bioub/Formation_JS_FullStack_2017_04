// On manipule déjà des objets en permanence en JS
console.log(typeof console); // object
console.log(typeof Math); // object
console.log(typeof JSON); // object
console.log(typeof global); // object
console.log(typeof process); // object

// On peut étendre des objets existants
console.log(Math.sum); // undefined
Math.sum = function(a, b) {
    return a + b;
};
console.log(Math.sum(1, 2));

// Modifier des objets
let backupRandom = Math.random;
Math.random = () => 0.5;
console.log(Math.random()); // 0.5
Math.random = backupRandom;
console.log(Math.random()); // 0.8471140390986085

// Supprimer des propriétés
delete Math.sum;
console.log(Math.sum); // undefined

// Pour les nouveaux objets ponctuels
// Syntaxe: object literal
var contact = {
    prenom: 'Romain',
    hello: function() {
        return 'Bonjour je suis ' + this.prenom;
    },
    helloES6() {
        return 'Bonjour je suis ' + this.prenom;
    }
};

console.log(typeof contact); // object
console.log(contact.hello()); // Bonjour je suis Romain

// JSON -> surensemble de object literal
var contactJSON = {
    "mon-prenom": "Romain",
    "age": 31,
    "formateur": true,
    "regex": /[a-c]/,
    "hobbies": ['JS', 'HTML'],
    "adresse": {
        "ville": 'Paris'
    }
};
// En JSON on a le droit à :
// primitifs (string avec double quotes, boolean, number)
// aux syntaxes litérales (array, regex, object)

var json = JSON.stringify(contact);
console.log(json); // {"prenom":"Romain"}

// ... réseau ...

var object = JSON.parse(json);
console.log(object.prenom); // Romain

// Pour les besoins récurrents
// Fonction constructeur
// (simule une classe)

var Contact = function() {

};

console.log(typeof Contact); // function
console.log(typeof Contact()); // undefined
console.log(typeof new Contact()); // object

// Simuler une classe avec une closure (mauvaise pratique)
var Contact = function(prenom) {
    this.hello = function() {
        return 'Bonjour je suis ' + prenom;
    };
};

var romain = new Contact('Romain');
console.log(romain.prenom); // undefined
console.log(romain.hello()); // Bonjour je suis Romain

var jean = new Contact('Jean');
console.log(jean.hello()); // Bonjour je suis Jean
console.log(romain.hello === jean.hello); // false

// Simuler une classe avec un prototype
var Contact = function(prenom) {
    this._prenom = prenom;
};

Contact.prototype.hello = function() {
    return 'Bonjour je suis ' + this._prenom;
};

var romain = new Contact('Romain');
console.log(romain.hello()); // Bonjour je suis Romain

var jean = new Contact('Jean');
console.log(jean.hello()); // Bonjour je suis Jean
console.log(romain.hello === jean.hello); // true

// Prototype
console.log(romain._prenom); // . cherche en 1er dans l'objet
console.log(romain.hello()); // en 2e cherche dans le proto de la fonction constructeur
console.log(romain.hasOwnProperty('_prenom')); // en 3e dans les proto parents (au plus haut niveau dans Object)
console.log(romain.hasOwnProperty('hello'));
console.log(romain.toto); // undefined

// Autre syntaxe possible : []
console['log'](romain['_prenom']);
console['log'](romain['hello']());

// Beaucoup pour lourd mais très dynamique
var method = 'log';
console[method]('Hello');

for (var prop in romain) {
    if (romain.hasOwnProperty(prop)) {
        console.log(prop);
        console.log(romain[prop]);
    }
}

var Formateur = function(prenom, specialite) {
    Contact.call(this, prenom);
    this._specialite = specialite;
};

Formateur.prototype = Object.create(Contact.prototype);
Formateur.prototype.hello = function() {
    return Contact.prototype.hello.call(this) + ', je suis formateur';
};

var romain = new Formateur('Romain', 'JS');
console.log(romain._prenom); // Romain
console.log(romain._specialite); // JS
console.log(romain.hello()); // Bonjour je suis Romain, je suis formateur
console.log(romain instanceof Formateur);
console.log(romain instanceof Contact);
console.log(romain instanceof Object);