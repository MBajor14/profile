import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() name: string;
  @Input() email: string;
  @Input() username: string;
  @Input() phone: string;

  constructor() { }

  ngOnInit() {
    
  }

}
