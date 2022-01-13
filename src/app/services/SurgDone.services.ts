import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

import { SurgDone } from '../models/SurgDone';

@Injectable({
  providedIn: 'root'
})
export class SurgDoneService {
  apiUrl = 'https://localhost:44310/api/'
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ListResponseModel<SurgDone>> {
    let newPath=this.apiUrl+"SurgDone/getall"
    return this.httpClient.get<ListResponseModel<SurgDone>>(newPath);
  }
  add(surgDone:SurgDone):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"SurgDone/add",surgDone);
  }
  delete(surgDone:SurgDone):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"SurgDone/delete",surgDone);
  }
  update(surgDone:SurgDone):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"SurgDone/update",surgDone);
  }
  getById(Id:number) {
    let newPath=this.apiUrl+"SurgDone/GetById?Id="+Id
    return this.httpClient.get<ListResponseModel<SurgDone>>(newPath);
  }
}
