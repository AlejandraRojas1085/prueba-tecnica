import { element } from 'protractor';

import { Component, OnInit, ViewChild } from "@angular/core";
import { ReadCsvService } from "src/app/services/read-csv.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { resolve } from 'dns';
import { log } from 'console';
@Component({
  selector: "app-dashboard-box",
  templateUrl: "./dashboard-box.component.html",
  styleUrls: ["./dashboard-box.component.scss"],
})
export class DashboardBoxComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  covidData: any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  listStatesByTotalCovid: Array<any> = [];

  stateMinor: string;

  stateMaxTotalCovid = {
    name: null,
    total: 0,
  }

  constructor(
    private readCsvService: ReadCsvService
  ) { }


  public ngOnInit() {
    this.getState();
  }

  async getData() {
    return new Promise((resolve) => {
      this.readCsvService.getData().subscribe(async data => {
        resolve(data)
      });
    })
  }

  async dataToJson() {
    return new Promise(async (resolve) => {
      let data = await this.getData();

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

  async getState() {
    this.covidData = await this.dataToJson();

    this.covidData.Sheet1.forEach(async element => {
      let accumulator = await this.accumulatorByRow(element)
      element.total = accumulator;
      await this.groupByProvince(element);

    });
  }

  async accumulatorByRow(item: any) {
    return new Promise((resolve) => {
      let accumulator: number = 0;

      for (const total in item) {
        if (total.includes('/')) {
          accumulator += item[total];
        }
      };

      resolve(accumulator);
    });
  }

  groupByProvince(element: any) {
    const find = this.listStatesByTotalCovid.find(item => item.name === element.Province_State);

    if (!find) {
      let province = {
        name: element.Province_State,
        total: element.total
      };

      this.listStatesByTotalCovid = [province, ...this.listStatesByTotalCovid];
    }

    if (find) {
      find.total += element.total;
    }

    this.responseQuestions();
  }

  async responseQuestions() {
    if (this.listStatesByTotalCovid.length > 0) {
      let max = this.listStatesByTotalCovid.reduce((a,b)=> {
      
        
      }) 
        
    }
  }

  
} 
