import {WebAPI} from './web-api';
import $ from 'jquery';
import {bootstrap} from 'bootstrap';
import {select}  from 'bootstrap-select';



export class Winedetails{
  static inject = [WebAPI];

  constructor(api){
    this.api = api;
    this.years = [
      {
        text:2006,
        value:2006
      },
      {
        text:2007,
        value:2007
      },
      {
          text:2008,
          value:2008
      },
      {
        text:2009,
        value:2009
      },
      {
        text:2010,
        value:2010
      },
      {
        text:2011,
        value:2011
      },
      {
        text:2012,
        value:2012
      }
    ];
  }

  activate(params){
    this.id = params.id||1;
    return this.api.getWineDetails(this.id).then(wine=> {
      this.wine = wine;
    });
  }

  // attached(){
  //   $(this.year).selectpicker();
  // }

  save(){
    this.api.save(this.wine).then(wine => {
      this.wine = wine;
    });
  }
}
