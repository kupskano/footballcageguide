import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaePage } from './tae.page';

describe('TaePage', () => {
  let component: TaePage;
  let fixture: ComponentFixture<TaePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
