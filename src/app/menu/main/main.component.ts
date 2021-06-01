import { Component, OnInit } from '@angular/core';
import { ObjListService } from 'src/app/obj-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public mainList = [];

  constructor(private _mainService: ObjListService) { }

  ngOnInit(): void {
    this._mainService.getList()
      .subscribe(data => this.mainList = data);
  }

}
