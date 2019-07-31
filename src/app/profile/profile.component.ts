import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private id: number;
  private user: any;

  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.activatedRoute.params
      .subscribe((params) => {
        this.id = params.id;
        console.log(params);
      })

    this.appService.getUser(this.id)
      .subscribe((response) => {
        console.log(response);
        this.user = response;
      })
  }
}