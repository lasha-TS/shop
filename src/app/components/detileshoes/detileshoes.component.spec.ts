import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetileshoesComponent } from './detileshoes.component';

describe('DetileshoesComponent', () => {
  let component: DetileshoesComponent;
  let fixture: ComponentFixture<DetileshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetileshoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetileshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
