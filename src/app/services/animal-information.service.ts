import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalInformation } from '../models/animalInformation';
import { AnimalKind } from '../models/animalKind';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { AnimalRace } from '../models/animalRace';

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

  getByUserId(Id:number) {
    let newPath=this.apiUrl+"AnimalInformation/GetByUserId?Id="+Id
    return this.httpClient.get<ListResponseModel<AnimalInformation>>(newPath);
  }
  add(supply:AnimalInformation):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"AnimalInformation/add",supply);
  }
  delete(supply:AnimalInformation):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"AnimalInformation/delete",supply);
  }
  update(supply:AnimalInformation):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"AnimalInformation/update",supply);
  }

  animalKind(){
    let newPath=this.apiUrl+"Animals/getall"
    return this.httpClient.get<ListResponseModel<AnimalKind>>(newPath);
  }
  animalRace(Id:number){
    let newPath=this.apiUrl+"AnimalRace/GetById?Id="+Id
    return this.httpClient.get<ListResponseModel<AnimalRace>>(newPath);
  }
  

}

