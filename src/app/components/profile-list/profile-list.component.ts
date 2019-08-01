import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  private profiles: any

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUsers()
    .subscribe((response: any) => {
      console.log(response);
      this.profiles = response;
    })
  }

}
