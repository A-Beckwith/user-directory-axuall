import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { saveAs } from 'file-saver';

/*
  Service to fetch user profiles from the randomuser api
*/
@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = 'https://randomuser.me/api/';
  usersSeed = 'abc';
  usersPerPage = '10';
  userFields = 'name,email,phone,dob,gender,picture';
  dlFormat = 'csv';

  constructor(private http: HttpClient) { }

  getPaginatedUsers(pageNumber: number): Observable<any> {
    return this.http.get<any>(this.usersUrl, {
      params: {
        results: this.usersPerPage,
        seed: this.usersSeed,
        inc: this.userFields,
        page: pageNumber.toString()
      }
    }).pipe(map(response => response.results));
  }

  /*
    Constructs a CSV from the users currently in the view and downloads it
  */
  downloadUsers(users: any[]) {
    const headers = 'FirstName,LastName,Email,Phone,Age,Gender';
    const csvUsers = users.map(user => {
      return `${user.name.first},${user.name.last},${user.email},${user.phone},${user.dob.age},${user.gender}`;
    });

    const csv = headers + '\r\n' + csvUsers.join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    saveAs(blob, 'users.csv');
  }
}
