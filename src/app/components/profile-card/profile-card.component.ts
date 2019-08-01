import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() email: string;
  @Input() username: string;
  @Input() phone: string;

  constructor(private router: Router) {  }

  ngOnInit() {  }

  onClick(){
    this.router.navigate([`/profiles/${this.id}`]);
    console.log('Profile Card clicked')
  }

}
