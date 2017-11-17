class AutocompleteCtrl {
  constructor(AppConstants, Events) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$Events = Events;
    this.events = [];
  }

  querySearch(query) {
    return this._$Events.searchEvent(query)
  }
}

export default AutocompleteCtrl;
