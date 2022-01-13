import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44310/api/'
  constructor(private httpClient: HttpClient) { }

  getById(Id:number):Observable<SingleResponseModel<User>> {
    let newPath=this.apiUrl+"user/GetById?Id="+Id
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  update(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"User/update",user);
  }
}