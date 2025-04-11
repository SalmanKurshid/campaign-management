import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-setup',
  templateUrl: './campaign-setup.component.html',
  styleUrls: ['./campaign-setup.component.css']
})
export class CampaignSetupComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formGroup.addControl('campaignName', new FormControl('', Validators.required));
    this.formGroup.addControl('startDate', new FormControl('', Validators.required));
  }

}
