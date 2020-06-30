import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {
  private counter = 0;

  private api = 'http://devapimega.rcnra.4cloud.co/api';
  private restful = `${this.api}/restful`;

  private _categories;
  private _top20;
  private _note;
  private _currentSectionItems;

  constructor(private http: HttpClient) {
    this._note = {
      body: 'losf asdf adfaldf as',
      img: {
        src: 'https://files.lamega.com.co/assets/public/styles/d_img_480x870/public/media/image/image/2020-02/shak_0.jpg?h=e99b7dd3&itok=SDlVtP3u',
        alt: 'mirada'
      },
      reactions: [
        {name: 'me gusta', votes: 0},
        {name: 'me encanta', votes: 0},
        {name: 'me divierte', votes: 7},
      ]
    };
  }

  get categories() {
    return this._categories;
  }

  get top20() {
    return this._top20;
  }

  get note() {
    return this._note;
  }

  get currentSectionItems() {
    return this._currentSectionItems;
  }

  get(endpoint: string) {
    return this.http.get(this.restful + '/' + endpoint)
      .pipe(tap(() => this._currentSectionItems = [{name: '1' + ++this.counter}, {name: 'a'}, {name: 'a'}]));
  }


  getLocal(endpoint: string) {
    return this.http.get(endpoint);
  }


}
