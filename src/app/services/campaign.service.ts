import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private formData: Record<string, any> = {};
  private campaignSetupSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  formData$: Observable<any> = this.campaignSetupSubject.asObservable();

  constructor() { }

  saveAllData(key:any,data:any){
    this.formData[key] = data;
  }

  getAllSavedData(key:any){
    return this.formData[key] || null;
  }
}
