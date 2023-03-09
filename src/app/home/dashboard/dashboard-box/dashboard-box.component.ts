import { Component, OnInit, ViewChild } from "@angular/core";

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ReadCsvService } from "src/app/services/read-csv.service";

import * as XLSX from 'xlsx';

export interface CovidSource {
  province_State: string;
  population: number;
  total: number;
  percentage: string;
  options: string
}

@Component({
  selector: "app-dashboard-box",
  templateUrl: "./dashboard-box.component.html",
  styleUrls: ["./dashboard-box.component.scss"],
})
export class DashboardBoxComponent implements OnInit {
  displayedColumns: string[] = ['province_State', 'population', 'total', 'percentage', 'options'];
  data: CovidSource[] = [];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  covidData: any;

  valueMajor: any;
  valueMinor: any;

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

  async readData() {     
    if (this.covidData) {
      this.dataSource = new MatTableDataSource<CovidSource>(this.covidData.Sheet1)
      
      this.dataSource.paginator = this.paginator;      
    }
  }

  async getState() {
    this.covidData = await this.dataToJson(); 

    this.covidData.Sheet1.forEach(async element => {
      console.log(element);
      

      let accumulator = await this.accumulatorByRow(element)
      element.total = accumulator;
      this.groupByProvince(element);
    });

    this.readData();
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
    const maxObj = this.listStatesByTotalCovid.reduce((prev, current) => (prev.total > current.total) ? prev : current);
    const minObj = this.listStatesByTotalCovid.reduce((prev, current) => (prev.total < current.total) ? prev : current);

    this.valueMajor = maxObj;
    this.valueMinor = minObj;
  }
} 
