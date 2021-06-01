import { Component, OnInit } from '@angular/core';
import { ObjListService } from 'src/app/obj-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  mainList: ReadonlyArray<any> = [];

  constructor(private _mainService: ObjListService) { }

  ngOnInit(): void {
    this._mainService.getList()
      .subscribe(data => this.mainList = data);
  }

}
