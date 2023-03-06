import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from "@angular/core";
import { DashboardItem } from "../../../interfaces/dashboard.item.type";
import { DashboardService } from "../../../services/dashboard.service";
import { DashboardComponent } from "../dashboard.component";

@Component({
  selector: "app-dashboard-box",
  templateUrl: "./dashboard-box.component.html",
  styleUrls: ["./dashboard-box.component.scss"],
})
export class DashboardBoxComponent implements OnInit {
  formUploadExcel = FormGroup;
  public expanded = false;

 

    


  inputFile = new FormControl(null, [Validators.required]);

  file: any = null;

  constructor(
    private dashboardService: DashboardService
    ) {    
      
  }

  public ngOnInit(): void {
  }

  /**
   * changePanel
   */
  public changePanel() {
    this.expanded = !this.expanded;
  }

  uploadFile(event){
    console.log(event);
    

  }
}
