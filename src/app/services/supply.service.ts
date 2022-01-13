import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Supply } from '../models/supply';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  apiUrl = 'https://localhost:44310/api/'
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ListResponseModel<Supply>> {
    let newPath=this.apiUrl+"Supply/getall"
    return this.httpClient.get<ListResponseModel<Supply>>(newPath);
  }
  add(supply:Supply):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Supply/add",supply);
  }
  delete(supply:Supply):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Supply/delete",supply);
  }
  update(supply:Supply):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Supply/update",supply);
  }
  getById(Id:number) {
    let newPath=this.apiUrl+"Supply/GetById?Id="+Id
    return this.httpClient.get<SingleResponseModel<Supply>>(newPath);
  }
}
