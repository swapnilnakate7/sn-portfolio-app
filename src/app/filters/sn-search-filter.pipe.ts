import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'searchFilter'
})
export class SearchFilter implements PipeTransform{

    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
          return it.title.toLowerCase().includes(searchText) || 
          ( it.technologies.includes(searchText));
        });

}
}