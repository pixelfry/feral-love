import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptComponent } from './adopt.component';

describe('AdoptComponent', () => {
  let component: AdoptComponent;
  let fixture: ComponentFixture<AdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
