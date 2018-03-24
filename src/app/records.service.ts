import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecordsService {

  private username: string;
  private clientid = 'f1d7b7788e46862e77dc';
  private clientsecret = '54f68381e8556513ef2a663fe4d5d8eab5235e52';

  constructor(private http: Http) {
    console.log('Service working...');
this.username = 'alexkarari';
   }
getRecordData() {
  return this.http.get('https://api.github.com/users/' + this.username + '?client_id='
   + this.clientid + '&client_secret=' + this.clientsecret)
   .map(res => res.json());
}

getUserRepos() {
  return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id='
    + this.clientid + '&client_secret=' + this.clientsecret)
    .map(res => res.json());
}

  updateRecord(username: string) {
    this.username = username;
  }
}
