import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform{
    transform(value:any,filterName:string,propName:string){
        // console.log(value,filterName,propName)
        if(value.length==0||filterName=='' || filterName==undefined){
            // console.log('empty')
            return value;
        }
        const resultArray=[];
        for(let val of value){
            if(val[propName].toLowerCase().match(filterName.toLowerCase())){
                resultArray.push(val);
            }
        }
        return resultArray;
    }
}