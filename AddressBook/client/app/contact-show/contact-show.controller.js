import angular from 'angular';
import uiRouterModuleName from 'angular-ui-router';

const module = angular.module('contact-show.controller', [
  uiRouterModuleName
]);

class ContactShowCtrl {
  constructor($http, $state) {
    let id = $state.params.id;

    $http.get(`/api/v1.0/contacts/${id}`)
          .then((res) => {
            this.contact = res.data;
          });
  }
}

module.controller('ContactShowCtrl', ContactShowCtrl);

export default module.name;
