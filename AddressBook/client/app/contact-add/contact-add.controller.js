import angular from 'angular';
import uiRouterModuleName from 'angular-ui-router';

const module = angular.module('contact-add.controller', [
  uiRouterModuleName
]);

class ContactAddCtrl {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
  }
  add() {
    this.$http.post('/api/v1.0/contacts', this.contact)
        .then((res) => {
          let contact = res.data;
          this.$state.go('contact-show', {id: contact._id});
        });
  }
}

module.controller('ContactAddCtrl', ContactAddCtrl);

export default module.name;
