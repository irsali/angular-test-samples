describe('BannerComponent (inline template)', () => {
    
      let comp:    BannerComponent;
      let fixture: ComponentFixture<BannerComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
    
      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ BannerComponent ], // declare the test component
        });
    
        fixture = TestBed.createComponent(BannerComponent);
    
        comp = fixture.componentInstance; // BannerComponent test instance
    
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
      });
    });