export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia-Cellar';
    config.map([
      {route: ['', 'welcome'],name: 'winelist',moduleId: './winelist',nav: true,title: 'Wine List'},
      {route: "wines/page/:id",name:'winelistpage',moduleId:'./winelist', title: 'Wine List'},
      {route: "wines/:id", name:'winedetails', moduleId:'./winedetails', title:'Wine Details'}
    ]);
    this.router = router;
  }
}
