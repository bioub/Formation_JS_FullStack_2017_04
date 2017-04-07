import angular from 'angular';
import contactListCtrlModuleName from './contact-list/contact-list.controller';
import contactShowCtrlModuleName from './contact-show/contact-show.controller';
import contactAddCtrlModuleName from './contact-add/contact-add.controller';
import uiRouterModuleName from 'angular-ui-router';

const module = angular.module('app.module', [
  uiRouterModuleName,
  contactListCtrlModuleName,
  contactShowCtrlModuleName,
  contactAddCtrlModuleName
]);

module.config(function($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true); // IE10+

  $stateProvider.state('contact-list', {
    url: '/',
    controller: 'ContactListCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'app/contact-list/contact-list.template.html'
  });

  $stateProvider.state('contact-add', {
    url: '/contact/add',
    controller: 'ContactAddCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'app/contact-add/contact-add.template.html'
  });

  $stateProvider.state('contact-show', {
    url: '/contact/{id}',
    controller: 'ContactShowCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'app/contact-show/contact-show.template.html'
  });

    // 1 - Créer 2 nouvelles pages (contact-add et contact-show)
    // -> un dossier avec un template et controller
    // 2 - Enregistrer le controller dans le module app.module
    // 3 - Créer les routes avec $stateProvider
    // -> pour l'url avec un paramètre : '/contact/{id}'
    // 4 - Pour contact-add, controller vide
    // -> template avec un formulaire
    // 5 - Pour contact-show, récupérer l'id dans l'URL
    // -> et faire la requete vers le serveur pour récupérer le contact
    // -> et l'afficher
    // -> Pour récupérer l'id dans l'url
    // class ContactShowCtrl {
    //   constructor($state) {
    //     let id = $state.params.id;
    // 6 - Créer les liens avec ui-sref
    // -> pour show : ui-sref="contact-show({id: '5d78grf844'})"

});
