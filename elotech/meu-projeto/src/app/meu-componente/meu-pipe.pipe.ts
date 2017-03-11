import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe'
})
export class MeuPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (args) {
      case 'maiusculo':
        value = value.toUpperCase();
        break;
      case 'minusculo':
        value = value.toLowerCase();
    }
    return value;
  }

}
