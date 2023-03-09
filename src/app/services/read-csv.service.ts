import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as XLSX from 'xlsx';
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

  async dataToJson(data:any) {        
    return new Promise(async (resolve) => {     

      let workBook = null;
      let jsonData = null;

      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});

      resolve(jsonData);
    });
  }
  
    
    

 
}
