import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjListService } from 'src/app/obj-list.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent implements OnInit {

  womans: any;

  constructor(private _womanService: ObjListService,
    private router: Router) { }

  ngOnInit(): void {
    this._womanService.getList()
    .subscribe(data => this.womans = data.filter((data) => data.category == 'woman'));
  }


  onClick(itemId: number){
    this.router.navigate(['/detile', itemId])
  }

}
