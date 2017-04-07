import angular from 'angular';

const module = angular.module('contact-list.controller', []);

class ContactListCtrl {
  constructor($http) {
    $http.get('/api/v1.0/contacts')
        .then((res) => {
          this.contacts = res.data;
        });
  }
}

module.controller('ContactListCtrl', ContactListCtrl);

export default module.name;
