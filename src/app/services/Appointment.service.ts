import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  apiUrl = 'https://localhost:44310/api/'
  constructor(private httpClient: HttpClient) { }
  getAll():Observable<ListResponseModel<Appointment>> {
    let newPath=this.apiUrl+"Appointment/getall"
    return this.httpClient.get<ListResponseModel<Appointment>>(newPath);
  }

  add(appointment:Appointment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Appointment/add",appointment);
  }
  delete(appointment:Appointment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Appointment/delete",appointment);
  }
  update(appointment:Appointment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Appointment/update",appointment);
  }


  getByTime(time:string):Observable<ListResponseModel<Appointment>> {
    let newPath=this.apiUrl+"Appointment/GetByTime?date="+time
    return this.httpClient.get<ListResponseModel<Appointment>>(newPath);
  }
  getByTimeApp(time:string,hour:number):Observable<ListResponseModel<Appointment>> {
    let newPath=this.apiUrl+"Appointment/GetByTimeApp?date="+time+"T"+hour+"%3A00%3A00"
    return this.httpClient.get<ListResponseModel<Appointment>>(newPath);
  }
  getCount(time:string,hour:number):Observable<SingleResponseModel<number>> {
    let newPath=this.apiUrl+"Appointment/GetCount?date="+time+"T"+hour+"%3A00%3A00"
    return this.httpClient.get<SingleResponseModel<number>>(newPath);
  }

  getById(Id:number) {
    let newPath=this.apiUrl+"Appointment/GetById?Id="+Id
    return this.httpClient.get<ListResponseModel<Appointment>>(newPath);
  }
}
