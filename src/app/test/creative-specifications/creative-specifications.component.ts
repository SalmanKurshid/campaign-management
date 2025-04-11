import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-creative-specifications',
  templateUrl: './creative-specifications.component.html',
  styleUrls: ['./creative-specifications.component.css']
})
export class CreativeSpecificationsComponent implements OnInit {

  constructor() { }

  @Input() formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup.addControl('adType', new FormControl('', Validators.required));
    this.formGroup.addControl('dimensions', new FormControl('', Validators.required));
  }

}
