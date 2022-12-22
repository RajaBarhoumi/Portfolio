import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageadminComponent } from './stageadmin.component';

describe('StageadminComponent', () => {
  let component: StageadminComponent;
  let fixture: ComponentFixture<StageadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
