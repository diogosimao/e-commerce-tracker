import angular from 'angular';
import 'angular-material';

// Create the module where our functionality can attach to
let autocompleteModule = angular.module('app.autocomplete', ['ngMaterial']);

// Include our UI-Router config settings
import AutocompleteConfig from './autocomplete.config';
autocompleteModule.config(AutocompleteConfig);


// Controllers
import AutocompleteCtrl from './autocomplete.controller';
autocompleteModule.controller('AutocompleteCtrl', AutocompleteCtrl);


export default autocompleteModule;
