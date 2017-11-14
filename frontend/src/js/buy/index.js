import angular from 'angular';

// Create the module where our functionality can attach to
let buyModule = angular.module('app.buy', []);

// Include our UI-Router config settings
import BuyConfig from './buy.config';
buyModule.config(BuyConfig);


// Controllers
import BuyCtrl from './buy.controller';
buyModule.controller('BuyCtrl', BuyCtrl);


export default buyModule;
