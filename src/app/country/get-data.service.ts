import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class GetDataService {

  public api:string;

  constructor(
    private _http:HttpClient
  ) {
    this.api = 'https://restcountries.com/v2';
  }

  public getCountries():Observable<any>{
    return this._http.get<any>(`${this.api}/all`)
  }

  public getCountry(name:string):Observable<any>{
    return this._http.get<any>(`${this.api}/name/${name}`)
  }
}
