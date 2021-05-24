import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpclient:HttpClient) { }

  // getAllCountries(){
  //   return this.httpclient.get('https://restcountries.eu/rest/v2/all');
  // }
}
