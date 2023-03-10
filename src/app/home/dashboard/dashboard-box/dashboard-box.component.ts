import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ReadCsvService } from "src/app/services/read-csv.service";
export interface CovidSource {
  province_State: string;
  population: number;
  total: number;
  percentage: string;
  options: string,
  date_one: string
  date_two: string,
  date_three: string
}
@Component({
  selector: "app-dashboard-box",
  templateUrl: "./dashboard-box.component.html",
  styleUrls: ["./dashboard-box.component.scss"],
})
export class DashboardBoxComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = ['province_State', 'population', 'total', 'percentage', 'date_one', 'date_two'];
  data: CovidSource[] = [];
  dataSource: any;

  listStatesByTotalCovid: Array<any> = [];

  valueMajor: any;
  valueMinor: any;

  constructor(
    private readCsvService: ReadCsvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDataToJson();
  }

  async getDataToJson() {
    this.readCsvService.getData().subscribe({
      next: async (data) => {
        const dataCovid: any = await this.readCsvService.dataToJson(data);

        localStorage.setItem('dataJson', JSON.stringify(dataCovid));

        this.getState();
      }
    });
  }

  async getState() {
    let dataCovid = await JSON.parse(localStorage.getItem('dataJson'));

    dataCovid.Sheet1.forEach(async element => {
      let accumulator = await this.accumulatorByRow(element);

      element.total = accumulator;

      this.groupByProvince(element);
    });
  }

  accumulatorByRow(item: any) {
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

  readData() {
    this.dataSource = new MatTableDataSource<CovidSource>(this.listStatesByTotalCovid);

    this.dataSource.paginator = this.paginator;
  }

  groupByProvince(element: any) {
    const find = this.listStatesByTotalCovid.find(item => item.name === element.Province_State);

    if (!find) {
      let province = {
        name: element.Province_State,
        population: element.Population,
        date_one: element['7/8/20'],
        date_two: element['1/25/21'],
        total: element.total,
        number_deaths: element ? element.number_deaths : '0'
      };

      this.listStatesByTotalCovid = [province, ...this.listStatesByTotalCovid];
    }

    if (find) {
      find.total += element.total;
    }

    this.readData();

    this.responseQuestions();
  }

  responseQuestions() {
    const maxObj = this.listStatesByTotalCovid.reduce((prev, current) => (prev.total > current.total) ? prev : current);
    const minObj = this.listStatesByTotalCovid.reduce((prev, current) => (prev.total < current.total) ? prev : current);

    this.valueMajor = maxObj;
    this.valueMinor = minObj;
  }

  new() {
    this.router.navigate(['/home/dashboard/new']);
  }
}
