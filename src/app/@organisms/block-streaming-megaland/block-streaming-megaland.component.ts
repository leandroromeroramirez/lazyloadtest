import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { OrgStreamingMegalandData } from '../block-streaming-megaland/org-streaming-megaland-data';
import { RestfulService } from '../../@service/restful.service';
import { Response } from '../../@models/restful/response';
import { CountdownService } from '../../@service/countdown.service';
import { isPlatformBrowser } from '@angular/common';
import { IInterval } from 'src/app/@models/services/iinterval';

@Component({
  selector: 'app-block-streaming-megaland',
  templateUrl: './block-streaming-megaland.component.html',
  styleUrls: ['./block-streaming-megaland.component.scss']
})
export class BlockStreamingMegalandComponent implements OnInit {
  private endpoint = 'megaland/streaming';
  ObjStreaming: OrgStreamingMegalandData;
  _day: number;
  _hour: number;
  _minutes: number;
  _seconds: number;

  constructor(private restful: RestfulService,
              private countdownService: CountdownService,
              // tslint:disable-next-line: ban-types
              @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.restful.get(this.endpoint).subscribe((response: Response) => {
      if (response.data !== null) {
        this.ObjStreaming = response.data[0];
        const timeConvert = this.ObjStreaming.startAt * 1000;
        if (isPlatformBrowser(this.platformId)) {
          this.countdownService.getCountDown(timeConvert)
            .subscribe((interval: IInterval) => {
              this._day = interval.days;
              this._hour = interval.hours;
              this._minutes = interval.minutes;
              this._seconds = interval.seconds;
            }, error => console.log('error service countdown'),
              () => console.log('The countdown finish')
            );
        }

      }
    });
  }

}
