import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-product-search',
  templateUrl: './form-product-search.component.html',
  styleUrl: './form-product-search.component.css'
})
export class FormProductSearchComponent {

  /* --- Form Variables --- */
  public search_string: string = "";  // search string

  /* --- @Outputs --- */
  @Output("input_change") inputChanged: EventEmitter<any> = new EventEmitter(); // to <app-product-navigation> : form input changed

  /**
   * Notifies parent of a change in input
   * 
   * @param $event - todo desc
   */
  onInputchange($event: any) { // todo replace any
    this.inputChanged.emit($event);
  }

}
