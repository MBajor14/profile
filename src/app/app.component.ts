import { Component } from '@angular/core';
import styles from '../config/styles'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//, ...styles.globals]
})
export class AppComponent {
  title = 'profile';

  // constructor(private http: HttpClient){}

  // ngOnInit(){

  // }
}
