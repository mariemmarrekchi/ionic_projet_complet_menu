import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndroitDetailsPage } from './endroit-details.page';

describe('EndroitDetailsPage', () => {
  let component: EndroitDetailsPage;
  let fixture: ComponentFixture<EndroitDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndroitDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndroitDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
