import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class GetDataService {

  public api:string;
  public countryName:BehaviorSubject<any>;

  constructor(
    private _http:HttpClient
  ) {
    this.api = environment.baseURL
    this.countryName = new BehaviorSubject('');
  }

  public getCountries():Observable<any>{
    return this._http.get<any>(`${this.api}/all`)
  }

  public getCountry(name:string):Observable<any>{
    return this._http.get<any>(`${this.api}/name/${name}`)
  }
}
