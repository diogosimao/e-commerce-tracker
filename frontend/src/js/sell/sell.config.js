function SellConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.sell', {
    url: '/sell/',
    controller: 'SellCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'sell/sell.html',
    title: 'Sell'
  });

};

export default SellConfig;
