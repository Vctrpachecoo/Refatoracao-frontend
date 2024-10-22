import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensageloginComponent } from './mensagelogin.component';

describe('MensageloginComponent', () => {
  let component: MensageloginComponent;
  let fixture: ComponentFixture<MensageloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensageloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensageloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
