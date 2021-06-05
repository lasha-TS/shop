import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjListService } from 'src/app/obj-list.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit {

  mans: any;

  constructor(private _manService: ObjListService,
    private router: Router) { }

  ngOnInit(): void {
    this._manService.getList()
    .subscribe(data => this.mans = data.filter((data) => data.category == 'man'));
  }

  onClick(itemId: number){
    this.router.navigate(['/detile', itemId])
  }

}
