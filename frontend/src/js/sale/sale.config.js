function SaleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.sale', {
    url: '/sale/',
    controller: 'SaleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'sale/sale.html',
    title: 'Sale'
  });

};

export default SaleConfig;
