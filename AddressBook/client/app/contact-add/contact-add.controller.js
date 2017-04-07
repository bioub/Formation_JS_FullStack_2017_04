import angular from 'angular';

const module = angular.module('contact-add.controller', []);

class ContactAddCtrl {
  constructor() {
    console.log('ContactAddCtrl');
  }
}

module.controller('ContactAddCtrl', ContactAddCtrl);

export default module.name;
