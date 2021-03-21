import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndroitsPage } from './endroits.page';

describe('EndroitsPage', () => {
  let component: EndroitsPage;
  let fixture: ComponentFixture<EndroitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndroitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndroitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
