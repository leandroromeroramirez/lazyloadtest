import { Component, OnInit, Input } from '@angular/core';
import { RestfulService } from '../../@service/restful.service';
import { Response } from '../../@models/restful/response';
import { OrgArtistsMegalandData } from './org-artists-megaland-data';


@Component({
  selector: 'app-org-block-artists-megaland',
  templateUrl: './block-artists-megaland.component.html',
  styleUrls: ['./block-artists-megaland.component.scss']
})
export class BlockArtistsMegalandComponent implements OnInit {
  @Input() isMobile: boolean;
  private endpoint = 'megaland/artists';
  ObjArtMega: OrgArtistsMegalandData;

  constructor(private restful: RestfulService) { }

  ngOnInit() {
    this.restful.get(this.endpoint).subscribe((response: Response) => {
      if (response.data !== null) {
        this.ObjArtMega = response.data[0];
      }
    });
  }

}
