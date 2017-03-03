(function() {
  // Criando um Componente
  var AppComponent = ng.core.Component({
    // nome da tag
    selector: 'my-app',
    // conteúdo
    template: '<h1>Hello World!</h1>'
  })
  .Class({
    constructor: function() { }
  });

  // Criando um módulo
  var AppModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

  ng.platformBrowserDynamic.platformBrowserDynamic()
    .bootstrapModule(AppModule);

})();
