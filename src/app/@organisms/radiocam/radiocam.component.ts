import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { OrgRadiocamData } from './org-radiocam-data';
import { RestfulService } from '../../@service/restful.service';
import { Response } from '../../@models/restful/response';


@Component({
  selector: 'app-org-radiocam',
  templateUrl: './radiocam.component.html',
  styleUrls: ['./radiocam.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadiocamComponent implements OnInit {

  private endpoint = 'radiocam';
  RadioCam: OrgRadiocamData;
  RadioCamTv: OrgRadiocamData;
  onlyOne = false;

  constructor(private restful: RestfulService) { }

  ngOnInit() {
    this.restful.get(this.endpoint).subscribe((response: Response) => {
      if (response.data !== null) {
        if (response.data.length === 1) {
          this.onlyOne = true;
        }

        if (response.data[0]) {
          if (response.data[0].machineName === 'radiocam') {
            this.RadioCam = response.data[0];
          } else {
            this.RadioCamTv = response.data[0];
          }
        }
        if (response.data[1]) {
          if (response.data[1].machineName === 'radiocam') {
            this.RadioCam = response.data[1];
          } else {
            this.RadioCamTv = response.data[1];
          }
        }
      }
    });

  }


}
