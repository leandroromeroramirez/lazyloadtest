import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  private api = 'http://devapimega.rcnra.4cloud.co/api';
  private restful = `${this.api}/restful`;

  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    return this.http.get(this.restful + '/' + endpoint);
  }


  getLocal(endpoint: string) {
    return this.http.get(endpoint);
  }


}
