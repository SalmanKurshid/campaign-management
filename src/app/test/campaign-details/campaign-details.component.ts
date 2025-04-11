import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  campaignSetupData:any;
  creativeSpecsData:any;
  contextualTriggersData:any;

  constructor(private campaign:CampaignService) { }

  ngOnInit(): void {
    this.campaignSetupData=this.campaign.getAllSavedData('campaignSetup');
    this.creativeSpecsData=this.campaign.getAllSavedData('creativeSpecs');
    this.contextualTriggersData=this.campaign.getAllSavedData('contextualTriggers');
  }

}
