class BuyCtrl {
  constructor(Events) {
    'ngInject';

    this._$Events = Events;

    this.buy = {
      eventName: 'Buy'
    }
}

    track() {
        this._$Events.save(this.buy);
    }

}


export default BuyCtrl;
