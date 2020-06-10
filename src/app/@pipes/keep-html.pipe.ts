import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keepHtml'
})
export class KeepHtmlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
