import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorbeeldFotoComponent } from './voorbeeld-foto.component';

describe('VoorbeeldFotoComponent', () => {
  let component: VoorbeeldFotoComponent;
  let fixture: ComponentFixture<VoorbeeldFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoorbeeldFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoorbeeldFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
