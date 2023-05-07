import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaConparamsComponent } from './actualiza-conparams.component';

describe('ActualizaConparamsComponent', () => {
  let component: ActualizaConparamsComponent;
  let fixture: ComponentFixture<ActualizaConparamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaConparamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaConparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
