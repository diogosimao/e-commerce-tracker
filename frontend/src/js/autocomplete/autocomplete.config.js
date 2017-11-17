function AutocompleteConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.autocomplete', {
    url: '/',
    controller: 'AutocompleteCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'autocomplete/autocomplete.html',
    title: 'Autocomplete'
  });

};

export default AutocompleteConfig;
