import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardItem } from "../interfaces/dashboard.item.type";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  public getNewDashboardData(): DashboardItem[] {
    return [
      {
        campaignTitle: "Campaña 1",
        campaignType: "Promoción",
        impactedUsers: 10,
        creationDate: new Date(),
        color: "#9469AD",
        sendDate: new Date(),
        status: "Creada",
        theme: "Salud",
        themeIcon: "Bullyng@PYPGrandes",
        expandableData: [
          {
            icon: "Sms",
            value: "10",
            label: "SMS Enviados"
          },
          {
            icon: "notifications",
            value: "12",
            label: "N. Push Enviadas"
          },
          {
            icon: "LocalPhone",
            value: "14",
            label: "Llamadas Enviadas"
          }
        ]
      },
      {
        campaignTitle: "Campaña 3",
        campaignType: "Promoción",
        impactedUsers: 10,
        creationDate: new Date(),
        sendDate: new Date(),
        status: "Creada",
        theme: "Salud",
        themeIcon: "Covid@PYPGrandes",
        color: "#419AFF",
        expandableData: [
          {
            icon: "Sms",
            value: "10",
            label: "SMS Enviados"
          },
          {
            icon: "notifications",
            value: "12",
            label: "N. Push Enviadas"
          },
          {
            icon: "LocalPhone",
            value: "14",
            label: "Llamadas Enviadas"
          }
        ]
      },
      {
        campaignTitle: "Campaña 1",
        campaignType: "Promoción",
        impactedUsers: 10,
        creationDate: new Date(),
        sendDate: new Date(),
        status: "Creada",
        theme: "Salud",
        color: "#65BE51",
        themeIcon: "nutricion@PYPGrandes",
        expandableData: [
          {
            icon: "Sms",
            value: "10",
            label: "SMS Enviados"
          },
          {
            icon: "notifications",
            value: "12",
            label: "N. Push Enviadas"
          },
          {
            icon: "LocalPhone",
            value: "14",
            label: "Llamadas Enviadas"
          }
        ]
      }
    ];
  }
}
