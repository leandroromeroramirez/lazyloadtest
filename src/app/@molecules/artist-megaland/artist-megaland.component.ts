import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../@models/restful/artist';

@Component({
  selector: 'mol-artist-megaland',
  templateUrl: './artist-megaland.component.html',
  styleUrls: ['./artist-megaland.component.scss']
})
export class ArtistMegalandComponent implements OnInit {
  @Input() artist: Artist;
  @Input() isMobile: boolean;

  _urlImg: string;
  _alt = '';
  _url = '';

  constructor() {
  }

  ngOnInit() {
    if (typeof this.artist !== 'undefined') {
      if (this.artist.image ) {
        this._alt = this.artist.image.alt;
        if (this.artist.image.derivatives  !== null) {
          if (this.artist.image.derivatives) {
            // this._urlImg = (this.isMobile ? this.artist.image.derivatives.mobile : this.artist.image.derivatives.desktop);
            this._urlImg = (this.isMobile ? this.artist.image.url : this.artist.image.url);
          }
        } else {
          this._urlImg = this.artist.image.url;
        }
      }
      if (this.artist.url !== 'undefined') {
        this._url = this.artist.url;
      }
    }
  }

}
