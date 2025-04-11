import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-manager',
  templateUrl: './campaign-manager.component.html',
  styleUrls: ['./campaign-manager.component.css']
})
export class CampaignManagerComponent implements OnInit {

  campaignManagerForm!: FormGroup;
  currentTab: 'campaign-setup' | 'creative-specs' | 'contextual-triggers' = 'campaign-setup';
  step1 = false;
  step2 = false;
  step3 = false;
  // showSkipValidations: boolean = false;
  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef,private router:Router,private campaign:CampaignService) { }

  ngOnInit(): void {
    this.campaignManagerForm = this.fb.group({
      campaignSetup: this.fb.group({}),
      creativeSpecs: this.fb.group({}),
      contextualTriggers: this.fb.group({})
    });
    this.campaignManagerForm.statusChanges.subscribe(() => {
      setTimeout(() => {
        if (this.campaignManagerForm && this.campaignManagerForm.controls && this.campaignManagerForm.controls['campaignSetup'].status && this.currentTab == 'campaign-setup') {
          this.step1 = this.campaignManagerForm.controls['campaignSetup'].status === 'VALID';
        } else if (this.campaignManagerForm && this.campaignManagerForm.controls && this.campaignManagerForm.controls['creativeSpecs'].status && this.currentTab == 'creative-specs') {
          this.step2 = this.campaignManagerForm.controls['creativeSpecs'].status === 'VALID';
        } else if (this.campaignManagerForm && this.campaignManagerForm.controls && this.campaignManagerForm.controls['contextualTriggers'].status && this.currentTab == 'contextual-triggers') {
          this.step3 = this.campaignManagerForm.controls['contextualTriggers'].status === 'VALID';
        }
        // this.showSkipValidations = false;
        this.cdr.detectChanges();
      });
    });
  }

  get campaignSetupGroup(): FormGroup {
    return this.campaignManagerForm.get('campaignSetup') as FormGroup;
  }

  get creativeSpecsGroup(): FormGroup {
    return this.campaignManagerForm.get('creativeSpecs') as FormGroup;
  }

  get contextualTriggersGroup(): FormGroup {
    return this.campaignManagerForm.get('contextualTriggers') as FormGroup;
  }

  goToNextStep() {
    console.log('this.campaignManagerForm',this.campaignManagerForm);
    this.campaignManagerForm.markAllAsTouched();
    const controls = this.campaignManagerForm.controls;
    if (this.currentTab == 'campaign-setup' && controls['campaignSetup'].valid) {
      this.currentTab = 'creative-specs';
    } else if (this.currentTab == 'creative-specs' && controls['creativeSpecs'].valid) {
      this.currentTab = 'contextual-triggers';
    } else if (this.currentTab == 'contextual-triggers') {
      if (controls['campaignSetup'].invalid) {
        this.currentTab = 'campaign-setup';
      } else if (controls['creativeSpecs'].invalid) {
        this.currentTab = 'creative-specs';
      } else if (controls['contextualTriggers'].invalid) {
        this.currentTab = 'contextual-triggers';
      } else {
        console.log('Form submitted:', this.campaignManagerForm.value);
        this.campaign.saveAllData('campaignSetup', this.campaignManagerForm.value.campaignSetup);
        this.campaign.saveAllData('creativeSpecs', this.campaignManagerForm.value.creativeSpecs);
        this.campaign.saveAllData('contextualTriggers', this.campaignManagerForm.value.contextualTriggers);
        this.router.navigate(['go-live-details'])
      }
    }else{
      // this.showSkipValidations=true
    }
  }

  skipValidations() {
    const controls = this.campaignManagerForm.controls;
    if (this.currentTab == 'campaign-setup') {
      this.currentTab = 'creative-specs';
    } else if (this.currentTab == 'creative-specs') {
      this.currentTab = 'contextual-triggers';
    }
  }

  saveAsDraft() {
    const rawFormData = this.campaignManagerForm.getRawValue();
    console.log('Saving draft...', rawFormData);
  }

}
