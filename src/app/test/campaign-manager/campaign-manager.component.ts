import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-campaign-manager',
  templateUrl: './campaign-manager.component.html',
  styleUrls: ['./campaign-manager.component.css']
})
export class CampaignManagerComponent implements OnInit {

  campaignManagerForm!:FormGroup;
  currentTab: 'campaign-setup' | 'creative-specs' | 'contextual-triggers' = 'campaign-setup';
  step1 = false;
  step2 = false;
  step3 = false;
  constructor(private fb:FormBuilder,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.campaignManagerForm = this.fb.group({
      campaignSetup: this.fb.group({}),
      creativeSpecs: this.fb.group({}),
      contextualTriggers: this.fb.group({})
    });
    this.campaignManagerForm.statusChanges.subscribe(() => {
      setTimeout(() => {
        if(this.campaignManagerForm &&  this.campaignManagerForm.controls && this.campaignManagerForm.controls['campaignSetup'].status && this.currentTab=='campaign-setup'){
          this.step1 = this.campaignManagerForm.controls['campaignSetup'].status === 'VALID';
        }else if(this.campaignManagerForm &&  this.campaignManagerForm.controls && this.campaignManagerForm.controls['creativeSpecs'].status && this.currentTab=='creative-specs'){
          this.step2 = this.campaignManagerForm.controls['creativeSpecs'].status === 'VALID';
        }else if(this.campaignManagerForm &&  this.campaignManagerForm.controls && this.campaignManagerForm.controls['contextualTriggers'].status && this.currentTab=='contextual-triggers'){
          this.step3 = this.campaignManagerForm.controls['contextualTriggers'].status === 'VALID';
        }
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

  submitAll() {
    if (this.campaignManagerForm.valid) {
      console.log('Form submitted:', this.campaignManagerForm.value);
    } else {
      const controls = this.campaignManagerForm.controls;

      if (controls['campaignSetup'].invalid) {
        this.currentTab = 'campaign-setup';
      } else if (controls['creativeSpecs'].invalid) {
        this.currentTab = 'creative-specs';
      } else if (controls['contextualTriggers'].invalid) {
        this.currentTab = 'contextual-triggers';
      }

      this.campaignManagerForm.markAllAsTouched();
      }
  }

  saveAsDraft(){
    const rawFormData = this.campaignManagerForm.getRawValue();
    console.log('Saving draft...', rawFormData);
  }

}
