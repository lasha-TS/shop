import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjListService } from 'src/app/obj-list.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number = 0; 
  details: any;
  count: number = 1;
  
  constructor(private route: ActivatedRoute,
    private _detiles: ObjListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this._detiles.getList()
    .subscribe(data => this.details = (data.filter((details) => details.id == this.id)));
  }

  minusCount(){
    this.count--;
  }

  plusCount(){
    this.count++;
  }



}