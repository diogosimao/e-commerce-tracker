function BuyConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.buy', {
    url: '/buy/:slug',
    controller: 'BuyCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'buy/buy.html',
    title: 'Buy'
  });

};

export default BuyConfig;
