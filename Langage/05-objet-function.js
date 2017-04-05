global.prenom = 'Jean';

const hello = function(p1, p2) {
  return `Bonjour ${p1}, ${p2} je m'appelle ${this.prenom}`;
};

const contact = {
    prenom: 'Romain'
};

console.log(hello('Michel', 'Thierry'));
console.log(hello.call(contact, 'Michel', 'Thierry'));
console.log(hello.call(contact, ...['Michel', 'Thierry']));
console.log(hello.apply(contact, ['Michel', 'Thierry']));
var helloRomain = hello.bind(contact);
console.log(helloRomain('Michel', 'Thierry'));