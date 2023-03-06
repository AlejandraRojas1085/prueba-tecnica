import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingService } from "./services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'PruebaTecnica';

  private lastVH = -1;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    public loadingService: LoadingService
  ) {
    //
    const calculateVH = () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      return vh;
    };
    window.addEventListener('resize', calculateVH);
    let eventFired = false;
    window.addEventListener('orientationchange', () => {
      if(eventFired){ return; }
      eventFired = true;
      let running = true;
      for(const delay of [50, 100, 200, 300, 500, 800, 1000]){
        setTimeout(() => {
          if(running){
            const vh = calculateVH();
            console.log("[orientationchange " + delay + "] vh:", vh, "this.lastVH", this.lastVH);
            if(vh !== this.lastVH){
              this.lastVH = vh;
              running = false;
            }
          }
        }, delay);
      }
      eventFired = false;
    });
    this.lastVH = calculateVH();
    console.log("[initialVH] ", this.lastVH);
    //
    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.loadingService.setLoading(true);
      }else if(event instanceof NavigationEnd) {
        this.loadingService.setLoading(false);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
    this.RegDashHeaderSVGs();
    this.RegNewCampaignsSVGs();
    this.RegCampaignsCreadasSVGs();
  }

  public RegDashHeaderSVGs(){
    this.matIconRegistry.addSvgIcon("Campanas_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/Campanas_1@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("mail@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/mail@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("sms_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/sms_1@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("smsRespuesta@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/smsRespuesta@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("llamadas_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/llamadas_1@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Usuarios impactados@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/Usuarios impactados@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Estatus@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/Estatus@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Tipo@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/Tipo@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("titulo@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/titulo@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("perfil_1",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/perfil_1.svg")
    );
    this.matIconRegistry.addSvgIcon("logout",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/logout.svg")
    );
  }

  public RegNewCampaignsSVGs(){
    this.matIconRegistry.addSvgIcon("Bullyng@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/Bullyng@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Covid@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/Covid@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("diabetes@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/diabetes@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("educación sexual@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/educacion sexual@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("embarazos_prematuros@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/embarazos_prematuros@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("hipertension@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/hipertension@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("mujeres embaradas@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/mujeres embaradas@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("nutricion@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/nutricion@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("otros@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/otros@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Violencia_domestica@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/Violencia_domestica@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("volencia mujer@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/volencia mujer@PYPGrandes.svg")
    );
    // Iconos canales campaña
    this.matIconRegistry.addSvgIcon("sms_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Canales/sms_1@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("sms respuesta@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Canales/sms respuesta@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("llamadas_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Canales/llamadas_1@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Recurso 50@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Canales/Recurso 50@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("mail@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Canales/mail@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("push@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Canales/push@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("llamadas-respuestas",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Canales/recibidas.svg")
    );
    // Iconos reglas campaña
    this.matIconRegistry.addSvgIcon("agregar@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/rules/agregar@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("duplicar@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/rules/duplicar@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Eliminar@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/rules/Eliminar@PYPGrandes.svg")
    );
  }

  public RegCampaignsCreadasSVGs(){
    this.matIconRegistry.addSvgIcon("Estadisticas@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/Estadisticas@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("ocultar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/ocultar.svg")
    );
    this.matIconRegistry.addSvgIcon("ver",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/ver.svg")
    );
    this.matIconRegistry.addSvgIcon("cancelar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/cancelar.svg")
    );
    this.matIconRegistry.addSvgIcon("Perfil creador@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/Perfil creador@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Fecha@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/Fecha@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("usuariosImpactados@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Dashboard/usuariosImpactados@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("canales de comunicacion@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/canales de comunicacion@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("listado@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/listado@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Mensaje@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/Mensaje@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("clicURL@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/clicURL@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("entregado@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/entregado@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("enviados @PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/enviados @PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("expirados@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/expirados@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("entregadospush@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/entregadospush@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("errorpush",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/errorpush.svg")
    );
    this.matIconRegistry.addSvgIcon("leido@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/leido@PYPGrandes.svg")
    );
    // stats t2s
    this.matIconRegistry.addSvgIcon("contestadas@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/contestadas@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("fallidos@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/fallidos@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("intentos@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/intentos@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("minutos Totales@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/minutos Totales@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("realizados@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/realizados@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("rechazadas@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/rechazadas@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("camara",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Patients/camara.svg")
    );
    this.matIconRegistry.addSvgIcon("pendingcall",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/pendingcall.svg")
    );
    this.matIconRegistry.addSvgIcon("voicemail",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/voicemail.svg")
    );
    // stats email
    this.matIconRegistry.addSvgIcon("Entregados@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/Entregados@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("entregados_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Campaigns/created/IconosIndicadoresStats/entregados_1@PYPGrandes.svg")
    );
  }
}
