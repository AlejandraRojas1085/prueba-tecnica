import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast.service";
import { AuthService } from "../../services/auth.service";
import { LoadingService } from "../../services/loading.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public title: string = "Iniciar Session";
  public isLoggedIn: boolean = false;
  public error: string = "";
  public form: FormGroup;
  public formRecovery: FormGroup;
  public action: string = "Iniciar Sesión";
  public loginInProgress = false;
  public rememberUser = false;
  public occupied = false;
  public recoverInProgress = false;
  public passRecover = false;
  public showPassword = false;
  public ngxLoadingAnimationTypes = {
    chasingDots: "chasing-dots",
    circle: "sk-circle",
    circleSwish: "circleSwish",
    cubeGrid: "sk-cube-grid",
    doubleBounce: "double-bounce",
    none: "none",
    pulse: "pulse",
    rectangleBounce: "rectangle-bounce",
    rotatingPlane: "rotating-plane",
    threeBounce: "three-bounce",
    wanderingCubes: "wandering-cubes",
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private authService: AuthService
  ) {
  }

  public async ngOnInit() {
    this.controlsCreate();
  }

  /**
   * ChangePassMode changes the showPassword value
   */
  public ChangePassMode() {
    this.showPassword = !this.showPassword;
  }

  /**
   * controlsCreate generates form with fields
   */
  public controlsCreate() {
    this.form = this.fb.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.formRecovery = this.fb.group({
      type: ["Correo", Validators.required],
      docType: [0, Validators.required],
      value: ["", Validators.required],
      via: ["Correo", Validators.required],
    });
  }

  /**
   * ChangeCheck changes rememberUser value
   */
  public ChangeCheck() {
    this.rememberUser = !this.rememberUser;
  }

  /**
   * login The user into system
   */
  public async login() {
    try {
      if (this.form.invalid) {
        return this.toastService.error("El usuario y contraseña son obligatorios");
      } else {
        if (this.loginInProgress) {
          return;
        }
        this.loginInProgress = true;
        this.toastService.info("Iniciando, espere un momento.");
        const user = this.form.value["user"];
        const password = this.form.value["password"];
        localStorage.setItem("RememberMe", this.rememberUser ? "true" : "false");
        // validate credentials
        //
        this.toastService.success(
          "Bienvenido '" + this.authService.getNames({firstName: true, lastName: true}) + "'",
          "Exito"
        );
        this.router.navigateByUrl("/home/dashboard");
      }
    } catch (e) {
      console.log(e);
      this.toastService.error(
        "Revise sus credenciales e intente de nuevo",
        "Error"
      );
      this.loginInProgress = false;
    }
  }

  /**
   * recoverPassword changes passRecover value
   */
  public async recoverPassword() {
    this.passRecover = !this.passRecover;
  }

  public clearValue() {
    this.formRecovery.get('value').setValue('');
  }
}
