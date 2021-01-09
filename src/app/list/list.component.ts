import { Component, OnInit,OnDestroy } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnDestroy {

  constructor(private dataService:DataServiceService) { }
  filterName:string;
  private searchValueSubscription:Subscription;

  ngOnInit(): void {
    this.searchValueSubscription=this.dataService.getSearchValueAsObs().subscribe((keyWord)=>{
      // document.querySelectorAll('tr').forEach((value)=>{
      //   console.log(value.querySelectorAll(''))
      // });
      this.filterName=keyWord;
      // console.log(keyWord)
      // this.listItem1=this.listItem1.filter((value)=>{
      //   //  console.log(value.name.toLocaleLowerCase().match(keyWord.toLocaleLowerCase()));
      //    return value.name.toLocaleLowerCase().match(keyWord.toLocaleLowerCase());
      // })
    })
  }

  onClickDetails(details:string){
    this.dataService.setDescriptionSubject(details);
  }









  details1="Bundhl Technologies Private Limited \n Hector Beverages Private Limited \n Puma Sports India Private Limited\nDewan Housing Finance ltd \n  Infosys Limited \nThink And Lern Private Limited\nDhelivery Private Limited\nWow Momo Foods And Private Limited\nRebel Foods Private Limited\nID Fresh Food Private Limited\nGala Precision Engineering Ptd";
  details2="Rebel Foods Private Limited\nID Fresh Food Private Limited\nGala Precision Engineering Ptd\nBundhl Technologies Private Limited \n Hector Beverages Private Limited \n Puma Sports India Private Limited";
  details3="Hector Beverages Private Limited \n Puma Sports India Private Limited\nDewan Housing Finance ltd \n  Infosys Limited \nThink And Lern Private Limited\nDhelivery Private Limited\nWow Momo Foods And Private Limited\nRebel Foods Private Limited"
  public listItem1 = [
    {date:"", name:"Competetive Inteligence", Entities:'0', actions:'mail', details:this.details1},
    {date:"", name:"My Vendors", Entities:'0', actions:'mail', details:this.details2},
    {date:"", name:"My customers", Entities:'0', actions:'mail', details:this.details3},
  ]
  public listItem2= [
    {date:"Jun 25", name:"Test 30 results", Entities:'28', actions:'mail', details:this.details2},
    {date:"Mar 26", name:"To_index", Entities:'100', actions:'mail', details:this.details1},
    {date:"Apr 27", name:"KPMG requested companies", Entities:'34', actions:'mail', details:this.details2},
    {date:"May 27", name:"Error-case", Entities:'5', actions:'mail', details:this.details3},
    {date:"Apr 28", name:"Two Companies", Entities:'45', actions:'mail', details:this.details1},
    {date:"May 30", name:"Custom", Entities:'26', actions:'mail', details:this.details2},
    {date:"Apr 1", name:"mumbai", Entities:'23', actions:'mail', details:this.details1},
    {date:"May 2", name:"Kerala", Entities:'55', actions:'mail', details:this.details2},
    {date:"Apr 3", name:"bangalore", Entities:'45', actions:'mail', details:this.details3},
    {date:"Jun 4", name:"Chennai", Entities:'0', actions:'mail', details:this.details2},
    {date:"Apr 5", name:"Delhi", Entities:'0', actions:'mail', details:this.details1},
    {date:"Dec 6", name:"neverdead", Entities:'0', actions:'mail', details:this.details2}
  
  ]

  ngOnDestroy(){

  }

}
