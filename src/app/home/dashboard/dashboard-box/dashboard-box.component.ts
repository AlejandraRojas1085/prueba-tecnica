
import { Component, OnInit, ViewChild } from "@angular/core";
import { ReadCsvService } from "src/app/services/read-csv.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
@Component({
  selector: "app-dashboard-box",
  templateUrl: "./dashboard-box.component.html",
  styleUrls: ["./dashboard-box.component.scss"],
})
export class DashboardBoxComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  covidData: Array<any> = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(
    private readCsvService: ReadCsvService
  ) { }


  public ngOnInit() {
    this.getData();
  }

  async getData() {
    this.readCsvService.getData().subscribe(async data => {
      let workBook = null;
      let jsonData = null;

      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});

      const dataString = JSON.stringify(jsonData);
      console.log('data ',dataString);

     
      
      
   

         
     
    });
  }

  
 
  



} 
