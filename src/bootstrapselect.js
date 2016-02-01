import {bindable, inject,customElement} from 'aurelia-framework';
import $ from 'jquery';
import {selectpicker} from 'bootstrap-select';

@inject(Element)
@customElement('bootstrapselect')
export class Bootstrapselect{

  @bindable options = null;
  @bindable selectedvalue = null;
  constructor(el){
    this.id = el.id;
  }

  attached(){
    var self = this;
    $(`#${this.id+'-select'}`).selectpicker({
      style:'btn-info'
    });

    $(`#${this.id+'-select'}`).on('change',function(){
      var selected = $(this).find("option:selected").val();
      self.selectedvalue =selected;
    });

    $(`#${this.id+'-select'}`).selectpicker('val',this.selectedvalue);
  }
}
