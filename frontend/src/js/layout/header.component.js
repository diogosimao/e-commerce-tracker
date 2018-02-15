class AppHeaderCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.isIn = false;
  }
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false; 
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
