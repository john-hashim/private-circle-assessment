import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private changeNavColorSubject = new Subject<string>();
  private searchValueSubject=new Subject<string>();
  constructor() { }

  setDescriptionSubject(description:string){
      this.changeNavColorSubject.next(description);
  }
  getDescriptionAsObs(){
    return this.changeNavColorSubject.asObservable();
  }


  setSearchValueSubject(searchValue){
    this.searchValueSubject.next(searchValue);
  }
  getSearchValueAsObs(){
    return this.searchValueSubject.asObservable();
  }
}
