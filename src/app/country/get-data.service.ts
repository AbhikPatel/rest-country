import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class GetDataService {

  public api: string;
  public getCountryName:string;
  public darkMode:BehaviorSubject<boolean>;

  constructor(
    private _http: HttpClient
  ) {
    this.api = 'https://restcountries.com/v2';
    this.getCountryName = ''
    this.darkMode = new BehaviorSubject(false)
  }

  public getCountries(): Observable<any> {
    return this._http.get<any>(`${this.api}/all`)
  }

  public getCountry(): Observable<any> {
    return this._http.get<any>(`${this.api}/name/${this.getCountryName}`)
  }
}
