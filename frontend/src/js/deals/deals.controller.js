class DealsCtrl {
  constructor(Events) {
    'ngInject';

    this._$Events = Events;

    this.deals = {
      eventName: 'Deals'
    }
}

    track() {
        this._$Events.save(this.deals);
    }

}


export default DealsCtrl;
