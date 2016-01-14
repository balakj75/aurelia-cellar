import {WebAPI} from "./web-api";


export class Winelist{
  static inject  = [WebAPI];
  constructor(api){
    this.api = api;
    this.wines = [];
    this.currentPageNumber = 1;

  }

  // activate(params) {
  //   console.log(pageNumber);
  //    this.wines = this.memoryStore.findAll();
  //    return this.wines;
  // }

  activate(params){
    this.currentPageNumber = params.id||1;
    this.api.getWineList(this.currentPageNumber).then(wines=> {
      this.wines = wines;
    });
    this.api.getWineCount().then( count=>{
      this.totalPages = this.api.getTotalPages(count);      
    });


  }
}
