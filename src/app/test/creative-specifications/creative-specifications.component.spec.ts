import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeSpecificationsComponent } from './creative-specifications.component';

describe('CreativeSpecificationsComponent', () => {
  let component: CreativeSpecificationsComponent;
  let fixture: ComponentFixture<CreativeSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeSpecificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
