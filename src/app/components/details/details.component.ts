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
  
  constructor(private route: ActivatedRoute,
    private _detiles: ObjListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this._detiles.getList()
    .subscribe(data => data.filter((detiles) => detiles.id == this.id));
  }

}