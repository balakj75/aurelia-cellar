import {WebAPI} from "./web-api";


export class Winelist{
  static inject  = [WebAPI];
  constructor(api){
    this.api = api;
    this.wines = [];

  }

  // activate(params) {
  //   console.log(pageNumber);
  //    this.wines = this.memoryStore.findAll();
  //    return this.wines;
  // }

  activate(params){
    console.log(params);
    this.api.getWineList(params.id).then(wines=> {
      this.wines = wines;
    });
  }
}
