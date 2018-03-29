import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {

  }
  title = 'app';
  public data = {};


  createBookmark() {
  alert('yey')
  console.log(this.data);
  	this
  	  .http
  	  .post('http://localhost:3000/api/bookmarks/', this.data, httpOptions)
  	  .subscribe(
       data => {
         // refresh the list
      	 console.log(data);
         return true;
       },
       error => {
         console.error("Error saving food! " + err);
         return Observable.throw(error);
       }
    );
  }
}
