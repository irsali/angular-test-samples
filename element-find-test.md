```ts
describe('FirstComponent (inline template)', () => {

  let comp: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent], // declare the test component
    });

    fixture = TestBed.createComponent(FirstComponent);

    comp = fixture.componentInstance; // FirstComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));

    el = de.nativeElement;
  });

});
```