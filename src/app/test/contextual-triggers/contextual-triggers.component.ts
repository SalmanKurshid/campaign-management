import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contextual-triggers',
  templateUrl: './contextual-triggers.component.html',
  styleUrls: ['./contextual-triggers.component.css']
})
export class ContextualTriggersComponent implements OnInit {

  constructor() { }

  @Input() formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup.addControl('triggerType', new FormControl('', Validators.required));
    this.formGroup.addControl('triggerValue', new FormControl('', Validators.required));
  }

}
