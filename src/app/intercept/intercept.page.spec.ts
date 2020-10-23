import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterceptPage } from './intercept.page';

describe('InterceptPage', () => {
  let component: InterceptPage;
  let fixture: ComponentFixture<InterceptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
