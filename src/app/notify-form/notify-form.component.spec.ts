import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyFormComponent } from './notify-form.component';

describe('NotifyFormComponent', () => {
  let component: NotifyFormComponent;
  let fixture: ComponentFixture<NotifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
