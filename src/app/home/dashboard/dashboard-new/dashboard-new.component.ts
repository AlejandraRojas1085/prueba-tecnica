import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReadCsvService } from 'src/app/services/read-csv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.scss']
})
export class DashboardNewComponent implements OnInit {
  formRegister: FormGroup
  covidData: any;

  data: Array<any> = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private readCsvService: ReadCsvService
  ) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      date_new: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      Population: new FormControl(null, [Validators.required]),
      Province_State: new FormControl(null, [Validators.required]),
      date_two: new FormControl(0, [Validators.required]),
      date_one: new FormControl(0, [Validators.required]),
      Admin2: new FormControl(null, [Validators.required]),
      number_deaths: new FormControl(null, [Validators.required]),
    });

    this.data = JSON.parse(localStorage.getItem('dataJson'));

    this.getData();
  }

  async getData() {
    this.readCsvService.getData().subscribe(async data => {
      this.covidData = await this.readCsvService.dataToJson(data);  
    })
  }

  getPopulation() {
    let data = this.formRegister.controls.city.value;
    let [city, poblacion, province] = data.split(',');

    this.formRegister.controls.Population.setValue(poblacion);
    this.formRegister.controls.Admin2.setValue(city);
    this.formRegister.controls.Province_State.setValue(province);
  }

  register() {
    if (this.formRegister.valid) {
      let date = new Intl.DateTimeFormat(['en-US']).format(new Date(this.formRegister.controls.date_new.value));

       localStorage.setItem('date_new', JSON.stringify(date));
       
      const data = {
        [`${date}`]: this.formRegister.controls.number_deaths.value,
        Province_State: this.formRegister.controls.Province_State.value,
        Population: this.formRegister.controls.Population.value,
        Admin2: this.formRegister.controls.Admin2.value,
        number_deaths: this.formRegister.controls.number_deaths.value,
        date_new: this.formRegister.controls.date_new.value
      }

      console.log("fecha ",data);  

      this.data.push(data);
      console.log("data a guardar", this.data);


      localStorage.setItem('dataJson', JSON.stringify(this.data));
      this.back()
    }
  }

  back() {
    this.router.navigate(['/home/dashboard'])
  }




}
