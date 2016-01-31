import {bindable, inject} from 'aurelia-framework';
import $ from 'jquery';
import {selectpicker} from 'bootstrap-select';

@inject(Element)

export class Bootstrapselect{

  @bindable options = null;
  constructor(el){
    this.id = el.id;
  }

  attached(){
    $(`#${this.id+'-select'}`).selectpicker({
      style:'btn-info'
    });
  }
}
