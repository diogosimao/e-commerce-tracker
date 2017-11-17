import angular from 'angular';

// Create the module where our functionality can attach to
let saleModule = angular.module('app.sale', []);

// Include our UI-Router config settings
import SaleConfig from './sale.config';
saleModule.config(SaleConfig);


// Controllers
import SaleCtrl from './sale.controller';
saleModule.controller('SaleCtrl', SaleCtrl);


export default saleModule;
