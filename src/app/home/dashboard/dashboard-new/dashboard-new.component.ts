import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReadCsvService } from 'src/app/services/read-csv.service';

@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.scss']
})
export class DashboardNewComponent implements OnInit {
  formRegister: FormGroup
  covidData: any;
  constructor(
    private formBuilder: FormBuilder,
    private readCsvService: ReadCsvService
  ) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      date: new FormControl(null),
      city: new FormControl(null, [Validators.required]),
      population: new FormControl(null, [Validators.required]),
      number_deaths: new FormControl(null, [Validators.required]),
    });
    this.getData()
  }

  async getData() {
    this.readCsvService.getData().subscribe(async data => {

      this.covidData = await this.readCsvService.dataToJson(data);

      console.log(this.covidData);
      

    })
  }

}
