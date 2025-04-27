import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'palabrasTruncas'
})
export class PalabrasTruncasPipe implements PipeTransform {

  transform(value: string, charLimit: number = 20): string {

    if (!value) return '';
    
    if (value.length <= charLimit) return value;

    return value.slice(0, charLimit) + '...';
  }

}
