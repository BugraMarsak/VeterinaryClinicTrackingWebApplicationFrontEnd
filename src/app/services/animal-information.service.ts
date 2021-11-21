import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalInformation } from '../models/animalInformation';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AnimalInformationService {
  apiUrl = 'https://localhost:44310/api/'
  constructor(private httpClient: HttpClient) { }
  getAll():Observable<ListResponseModel<AnimalInformation>> {
    let newPath=this.apiUrl+"AnimalInformation/getall"
    return this.httpClient.get<ListResponseModel<AnimalInformation>>(newPath);
  }


  getByAnimalId(Id:number) {
    let newPath=this.apiUrl+"AnimalInformation/GetById?Id="+Id
    return this.httpClient.get<SingleResponseModel<AnimalInformation>>(newPath);
  }
}

