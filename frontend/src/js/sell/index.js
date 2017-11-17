import angular from 'angular';

// Create the module where our functionality can attach to
let sellModule = angular.module('app.sell', []);

// Include our UI-Router config settings
import SellConfig from './sell.config';
sellModule.config(SellConfig);


// Controllers
import SellCtrl from './sell.controller';
sellModule.controller('SellCtrl', SellCtrl);


export default sellModule;
