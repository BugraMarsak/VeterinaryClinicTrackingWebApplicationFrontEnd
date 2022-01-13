import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentTypes } from '../models/AppointmentTypes';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class AppointmentTypesService {
  apiUrl = 'https://localhost:44310/api/'
  constructor(private httpClient: HttpClient) { }
  getAll():Observable<ListResponseModel<AppointmentTypes>> {
    let newPath=this.apiUrl+"AppointmentTypes/getall"
    return this.httpClient.get<ListResponseModel<AppointmentTypes>>(newPath);
  }

  getById(Id:number):Observable<SingleResponseModel<AppointmentTypes>> {
    let newPath=this.apiUrl+"AppointmentTypes/GetById?Id="+Id
    return this.httpClient.get<SingleResponseModel<AppointmentTypes>>(newPath);
  }
}
