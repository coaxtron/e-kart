import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCardsComponent } from './save-cards.component';

describe('SaveCardsComponent', () => {
  let component: SaveCardsComponent;
  let fixture: ComponentFixture<SaveCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
