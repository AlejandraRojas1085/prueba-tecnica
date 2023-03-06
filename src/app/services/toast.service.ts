import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastr: ToastrService) {
  }

  // _toastrOptions is the global configuration for the toastr
  private _toastrOptions: any = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    timeOut: "3500",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
  };

  // success shows a toastr for a successful case
  public success(message: string, title?: string) {
    title ? this.toastr.success(message, title, this._toastrOptions) : this.toastr.success(message, null, this._toastrOptions);
  }

  // info shows a toastr for an information case
  public info(message: string, title?: string) {
    title ? this.toastr.info(message, title, this._toastrOptions) : this.toastr.info(message, null, this._toastrOptions);
  }

  // error shows a toastr for a wrong case
  public error(message: string, title?: string) {
    const optionsCopy = {...this._toastrOptions};
    optionsCopy.timeOut = "10000";
    title ? this.toastr.error(message, title, this._toastrOptions) : this.toastr.error(message, null, optionsCopy);
  }

  public clear(){
    try {
      this.toastr.clear();
    }catch (e) {
      console.log(e);
    }
  }

}
