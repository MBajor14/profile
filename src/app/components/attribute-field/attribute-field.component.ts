import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attribute-field',
  templateUrl: './attribute-field.component.html',
  styleUrls: ['./attribute-field.component.css']
})
export class AttributeFieldComponent implements OnInit {

  @Input() field: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
