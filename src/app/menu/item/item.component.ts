import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjListService } from 'src/app/obj-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  mainList: ReadonlyArray<any> = [];

  constructor(private _mainService: ObjListService,
    private router: Router) { }

  ngOnInit(): void {
    this._mainService.getList()
      .subscribe(data => this.mainList = data);
  }

  onSelect(){
    // this.router.navigate(['/mainList', item.id]);
    console.log('click')
  }

}
