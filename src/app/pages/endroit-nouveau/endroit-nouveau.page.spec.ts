import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndroitNouveauPage } from './endroit-nouveau.page';

describe('EndroitNouveauPage', () => {
  let component: EndroitNouveauPage;
  let fixture: ComponentFixture<EndroitNouveauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndroitNouveauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndroitNouveauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
