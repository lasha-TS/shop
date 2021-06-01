import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjList } from './obj-list';

@Injectable({
  providedIn: 'root'
})
export class ObjListService {

  private _url = '/assets/data/objlist.json';

  constructor(private http: HttpClient) { }

  getList(): Observable<ObjList[]>{
    return this.http.get<ObjList[]>(this._url);
  }
}
