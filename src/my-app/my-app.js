(function () {
  class MyApp {
    beforeRegister () {
      this.is = 'my-app';

      this.properties = {
        page: {
          type: String,
          reflectToAttribute: true,
          observer: '_pageChanged'
        }
      };

      this.observers = ['_routePageChanged(routeData.page)'];
    }

    _routePageChanged(page) {
      this.page = page || 'view1';
    };

    _pageChanged(page) {
      // Load page import on demand. Show 404 page if fails
      var prefix = `my-${page}`;
      var resolvedPageUrl = this.resolveUrl(`/src/${prefix}/${prefix}.html`);
      this.importHref(resolvedPageUrl, null, this._showPage404, true);
    };

    _showPage404() {
      this.page = 'view404';
    };
  }
  Polymer(MyApp);
})();