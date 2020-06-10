import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(public domSinatizer: DomSanitizer) {

  }

  transform(value: string): any {
    let url: string;
    url = this.urlFixYoutube(value);
    if (url !== 'error') {
      return this.domSinatizer.bypassSecurityTrustResourceUrl(url);
    } else {
      console.log('error al tratar de cargar url ' + value);
    }

  }

  urlFixYoutube(url: string) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);

      if (match && match[2].length === 11) {
          return '//www.youtube.com/embed/' + match[2];
      } else {
          return 'error';
      }

  }

}
