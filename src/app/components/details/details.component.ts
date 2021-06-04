import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjList } from 'src/app/obj-list';
import { ObjListService } from 'src/app/obj-list.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number = 0; 
  details: any = [];
  
  constructor(private route: ActivatedRoute,
    private _detiles: ObjListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this._detiles.getList()
    .subscribe(this.details = data.filter((details: { id: number; }) => details.id == this.id));
    // console.log(this.details)
  }

}