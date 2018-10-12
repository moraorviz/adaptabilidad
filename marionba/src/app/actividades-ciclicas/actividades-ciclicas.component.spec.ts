import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCiclicasComponent } from './actividades-ciclicas.component';

describe('ActividadesCiclicasComponent', () => {
  let component: ActividadesCiclicasComponent;
  let fixture: ComponentFixture<ActividadesCiclicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesCiclicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesCiclicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
