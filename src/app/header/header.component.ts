import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }

  searchItem:string;

  ngOnInit(): void {
  }
  onSearch(searchValue){
      this.dataService.setSearchValueSubject(searchValue);
  }

}
