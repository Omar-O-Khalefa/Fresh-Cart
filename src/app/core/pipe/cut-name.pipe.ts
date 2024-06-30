import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutName',
  standalone: true
})
export class CutNamePipe implements PipeTransform {

  transform(text:string,limit:number): unknown {
    return text?.split(" ").slice(0,limit).join(" ")
  }

}
