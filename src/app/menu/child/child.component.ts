import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjListService } from 'src/app/obj-list.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  childs: any;

  constructor(private _childService: ObjListService,
    private router: Router) { }

  ngOnInit(): void {
    this._childService.getList()
    .subscribe(data => this.childs = data.filter((data) => data.category == 'child'));
  }


  onClick(itemId: number){
    this.router.navigate(['/detile', itemId])
  }

}
