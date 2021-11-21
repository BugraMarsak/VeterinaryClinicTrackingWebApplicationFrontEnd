import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Personnel } from '../models/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  apiUrl = 'https://localhost:44310/api/'

  constructor(private httpClient: HttpClient) {  }

  getAll():Observable<ListResponseModel<Personnel>> {
    let newPath=this.apiUrl+"Personnel/getall"
    return this.httpClient.get<ListResponseModel<Personnel>>(newPath);
  }

}
