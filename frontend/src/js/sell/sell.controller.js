class SellCtrl {
  constructor(Events) {
    'ngInject';

    this._$Events = Events;

    this.sell = {
      eventName: 'Sell'
    }
}

    track() {
        this._$Events.save(this.sell);
    }

}


export default SellCtrl;
