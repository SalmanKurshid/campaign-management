import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualTriggersComponent } from './contextual-triggers.component';

describe('ContextualTriggersComponent', () => {
  let component: ContextualTriggersComponent;
  let fixture: ComponentFixture<ContextualTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextualTriggersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
