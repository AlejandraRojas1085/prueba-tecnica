import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class ReadCsvService {
  covidData = '../../../../assets/csv/covid.csv'

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(){

    return this.httpClient.get(this.covidData, {responseType: 'text'});
  }
  
    
    

 
}
