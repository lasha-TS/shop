import { Component, OnInit } from '@angular/core';
import { ObjListService } from 'src/app/obj-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  names = '';

  constructor(private _searchservice: ObjListService) { }

  ngOnInit(): void {
    // this._searchservice.getList()
    // .subscribe(data => this.value = data.filter((data) => data.model == this.value));
  }

}
