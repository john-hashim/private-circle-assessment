import { Component, OnInit,OnDestroy } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit,OnDestroy {

  constructor(private dataService:DataServiceService) { }

  description:string;
  private descriptionSubject:Subscription;

  ngOnInit(): void {
      this.descriptionSubject=this.dataService.getDescriptionAsObs().subscribe((data)=>{
        this.description=data;
      })
  }
  ngOnDestroy(){
    this.descriptionSubject.unsubscribe();  
  }
  

}
