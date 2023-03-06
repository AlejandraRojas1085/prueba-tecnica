import { Injectable } from '@angular/core';

export enum LoadingColors{
  DARKBLUE = "rgb(5, 53, 107)",
  WHITE = "white"
}

@Injectable({
  providedIn: 'root'
})

export class LoadingService {

  public readonly ngxLoadingAnimationTypes = {
    chasingDots: 'chasing-dots',
    circle: 'sk-circle',
    circleSwish: 'circleSwish',
    cubeGrid: 'sk-cube-grid',
    doubleBounce: 'double-bounce',
    none: 'none',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rotatingPlane: 'rotating-plane',
    threeBounce: 'three-bounce',
    wanderingCubes: 'wandering-cubes'
  };

  private _loading = false;
  private _forcedLoading = false;
  private _loadingColor = "white";

  constructor() {
  }

  get loading(): boolean{
    return this._loading;
  }
  get forcedLoading(): boolean{
    return this._forcedLoading;
  }

  get loadingColor(): string {
    return this._loadingColor;
  }

  public setLoading(status: boolean, color: LoadingColors = LoadingColors.DARKBLUE) {
    this._loading = status;
    this._loadingColor = color;
  }

  public forceLoading(status: boolean) {
    this._forcedLoading = status;
  }

  public innerWidth() {
    return window.innerWidth;
  }

  public innerHeight(){
    return window.innerHeight;
  }

  public static vh(v) {
    // const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const h = document.documentElement.clientHeight;
    return (v * h) / 100;
  }

  public static vw(v) {
    // const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const w = document.documentElement.clientWidth;
    return (v * w) / 100;
  }
}
