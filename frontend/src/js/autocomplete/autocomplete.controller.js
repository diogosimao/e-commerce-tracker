class AutocompleteCtrl {
  constructor(AppConstants, Events) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$Events = Events;
    this.events = [];
    this.noCache = false;
    this.groupOptions = [
        {value: 0, label:'None'},
        {value: 1, label:'Day'},
        {value: 2, label:'Week'},
        {value: 3, label:'Month'},
        {value: 4, label:'Year'},
        //{value: 5, label:'Group by last x hours'},
        ];
  }

  querySearch(eventName, eventGroup) {
    return this._$Events.searchEvent(eventName, eventGroup)
  }
}

export default AutocompleteCtrl;
