import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiftypestageComponent } from './modiftypestage.component';

describe('ModiftypestageComponent', () => {
  let component: ModiftypestageComponent;
  let fixture: ComponentFixture<ModiftypestageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiftypestageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiftypestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
