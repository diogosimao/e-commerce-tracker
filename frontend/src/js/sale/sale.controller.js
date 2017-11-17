class SaleCtrl {
  constructor(Events) {
    'ngInject';

    this._$Events = Events;

    this.sale = {
      eventName: 'Sale'
    }
}

    track() {
        this._$Events.save(this.sale);
    }

}


export default SaleCtrl;
