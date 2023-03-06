import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyPreloadingStrategyService implements PreloadingStrategy {

  public preloadedModules = {};
  public preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload'] && this.preloadedModules[route.path] == null) {
      this.preloadedModules[route.path] = true;
      return load();
    } else {
      return of(null);
    }
  }
}
