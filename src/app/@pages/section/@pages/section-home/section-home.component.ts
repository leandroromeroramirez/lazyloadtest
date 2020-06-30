import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestfulService } from '../../../../@service/restful.service';
import { sectionsDic } from '../../../../dics/sections.dictionary';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent implements OnInit {

  sectionName: string;
  items;
  constructor(private router: Router,
              private restfullService: RestfulService) { }

  ngOnInit(): void {
    console.log(this.router.url);
    const sectionUrl = this.router.url.split('/')[1];
    this.sectionName = sectionsDic[sectionUrl] && sectionsDic[sectionUrl].name || 'Ups!!!';
    this.items = this.restfullService.currentSectionItems;
    console.log('Section HOme');
  }

}
