#Setup (Using hero component example )

```ts
// async beforeEach
beforeEach( async(() => {
  TestBed.configureTestingModule({
    declarations: [ DashboardHeroComponent ],
  })
  .compileComponents(); // compile template and css
}));

// synchronous beforeEach
beforeEach(() => {
  fixture = TestBed.createComponent(DashboardHeroComponent);
  comp    = fixture.componentInstance;
  heroEl  = fixture.debugElement.query(By.css('.hero')); // find hero element

  // pretend that it was wired to something that supplied a hero
  expectedHero = new Hero(42, 'Test Name');
  comp.hero = expectedHero;
  fixture.detectChanges(); // trigger initial data binding
});
```

# Name test passed with uppercase pipe
```ts
// html
 {{hero.name | uppercase}}

it('should display hero name', () => {
  const expectedPipedName = expectedHero.name.toUpperCase();
  expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
});
```

#Click Test
```ts
it('should raise selected event when clicked', () => {
  let selectedHero: Hero;
  comp.selected.subscribe((hero: Hero) => selectedHero = hero);

  heroEl.triggerEventHandler('click', null);
  expect(selectedHero).toBe(expectedHero);
});
```