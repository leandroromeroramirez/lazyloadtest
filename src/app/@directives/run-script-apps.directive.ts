import { Directive, ElementRef, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';

declare var Playbuzz: number;

@Directive({ selector: '[runApps]' })

export class RunScriptAppsDirective implements OnInit {
  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object, private meta: Meta) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => { // wait for DOM rendering
        this.insertHeadShared();
      });
    }
  }

  insertHeadShared(): void {
    this.meta.addTags([
      {property: 'al:ios:url', content: 'www.lamega.com.co'},
      {property: 'al:ios:app_store_id', content: '1489249669'},
      {property: 'al:ios:app_name', content: 'La Mega Oficial'},
      {property: 'al:android:url', content: 'https://play.google.com/store/apps/details?id=co.com.lamega'},
      {property: 'al:android:package', content: 'co.com.lamega'},
      {property: 'al:android:app_name', content: 'La Mega Oficial'}
    ]);
  }
}
