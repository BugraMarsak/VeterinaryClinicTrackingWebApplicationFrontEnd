import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { VaccinationCard } from '../models/vaccinationCard';

@Injectable({
  providedIn: 'root'
})
export class VaccinationcardService {
  apiUrl = 'https://localhost:44310/api/'
  constructor(private httpClient: HttpClient) { }
  getAll():Observable<ListResponseModel<VaccinationCard>> {
    let newPath=this.apiUrl+"VaccinationCard/getall"
    return this.httpClient.get<ListResponseModel<VaccinationCard>>(newPath);
  }

  getById(Id:number):Observable<ListResponseModel<VaccinationCard>> {
    let newPath=this.apiUrl+"VaccinationCard/GetById?Id="+Id
    return this.httpClient.get<ListResponseModel<VaccinationCard>>(newPath);
  }
  getByVacId(Id:number):Observable<SingleResponseModel<VaccinationCard>> {
    let newPath=this.apiUrl+"VaccinationCard/GetByVacId?Id="+Id
    return this.httpClient.get<SingleResponseModel<VaccinationCard>>(newPath);
  }
  add(vaccinationCard:VaccinationCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"VaccinationCard/add",vaccinationCard);
  }
  delete(vaccinationCard:VaccinationCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"VaccinationCard/delete",vaccinationCard);
  }
  update(vaccinationCard:VaccinationCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"VaccinationCard/update",vaccinationCard);
  }
}
