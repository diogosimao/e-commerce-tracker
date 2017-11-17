import angular from 'angular';

// Create the module where our functionality can attach to
let dealsModule = angular.module('app.deals', []);

// Include our UI-Router config settings
import DealsConfig from './deals.config';
dealsModule.config(DealsConfig);


// Controllers
import DealsCtrl from './deals.controller';
dealsModule.controller('DealsCtrl', DealsCtrl);


export default dealsModule;
