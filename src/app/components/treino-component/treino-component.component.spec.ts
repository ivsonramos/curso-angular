import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoComponentComponent } from './treino-component.component';

describe('TreinoComponentComponent', () => {
  let component: TreinoComponentComponent;
  let fixture: ComponentFixture<TreinoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
