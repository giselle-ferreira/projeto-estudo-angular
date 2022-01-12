import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

   transform(data: string[], query: string): string[]{
    return data.filter(txt => txt.toLowerCase().startsWith(query.toLowerCase()))

    // o primeiro parametro refere-se ao array
    // do segundo parametro em diante são os parâmetro que o filtro deve atender
    // este filtro retorna um texto que comece com o que for definido no parâmetro query
  }
}
