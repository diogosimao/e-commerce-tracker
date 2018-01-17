class AutocompleteCtrl {
  constructor(AppConstants, Events) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$Events = Events;
    this.events = [];
    this.groupOptions = [
        {value: 1, label:'Group by day'},
        {value: 2, label:'Group by week'},
        {value: 3, label:'Group by month'},
        {value: 4, label:'Group by year'},
        //{value: 5, label:'Group by last x hours'},
        ];
  }

  querySearch(eventName, eventGroup) {
    return this._$Events.searchEvent(eventName, eventGroup)
  }
}

export default AutocompleteCtrl;
