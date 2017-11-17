function DealsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.deals', {
    url: '/deals/',
    controller: 'DealsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'deals/deals.html',
    title: 'Deals'
  });

};

export default DealsConfig;
