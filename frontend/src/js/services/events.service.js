export default class Events {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  save(event) {
    let request = {
      url: `${this._AppConstants.api}/events`,
      method: 'POST',
      data: { name: event.eventName }
    };

    return this._$http(request).then((res) => res.data.name);
  }

  searchEvent(eventName, eventGroup, $q) {
    let request = {
      url: `${this._AppConstants.api}/events_search`,
      method: 'GET',
      params: {event_name: eventName, event_group: eventGroup}
    };

    this.events = [];
    if (eventName.length >= 2){
      return this._$http(request).then(function(response) {
        if (typeof response.data === 'object') {
          return response.data;
          } 
        else {
          // invalid response
          return $q.reject(response.data);
          }

        }, function(response) {
          // something went wrong
          return $q.reject(response.data);
        });
    }
  }
}