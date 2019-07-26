import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private name: string;
  private email: string;
  private username: string;
  private phone: string;

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
    .subscribe((response: any) => {
      console.log(response);

      this.name = response.name;
      this.email = response.email;
      this.username = response.username;
      this.phone = response.phone;
    })
  }

}
