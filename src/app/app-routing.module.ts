import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPreloadingStrategyService } from "./services/my-preloading-strategy.service";

const routes: Routes = [
    {
      path: 'login',
      loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
      data: {
        login: true
      }
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      data: {
        login: false
      }
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: MyPreloadingStrategyService
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
