import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutypestageComponent } from './ajoutypestage.component';

describe('AjoutypestageComponent', () => {
  let component: AjoutypestageComponent;
  let fixture: ComponentFixture<AjoutypestageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutypestageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutypestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
