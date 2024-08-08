import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
@Input() title: string="";
@Input() data:any[]=[]
@Output() selectedValue = new EventEmitter;

detectChange(event:any){
this.selectedValue.emit(event)
}

}
