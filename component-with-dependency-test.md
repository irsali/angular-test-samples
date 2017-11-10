
###Always get the service from an injector

```ts
// UserService actually injected into the component
userService = fixture.debugElement.injector.get(UserService);

// or

// UserService from the root injector
userService = TestBed.get(UserService);
```

### shown by example
```ts
it('stub object and injected UserService should not be the same', () => {
  expect(userServiceStub === userService).toBe(false);

  // Changing the stub object has no effect on the injected service
  userServiceStub.isLoggedIn = false;
  expect(userService.isLoggedIn).toBe(true);
});
```

###Final setup and tests

```ts
beforeEach(() => {
  // stub UserService for test purposes
  userServiceStub = {
    isLoggedIn: true,
    user: { name: 'Test User'}
  };

  TestBed.configureTestingModule({
     declarations: [ WelcomeComponent ],
     providers:    [ {provide: UserService, useValue: userServiceStub },
      { provide: ComponentFixtureAutoDetect, useValue: true } // for automatic change detection
       ]
  });

  fixture = TestBed.createComponent(WelcomeComponent);
  comp    = fixture.componentInstance;

  // UserService from the root injector
  userService = TestBed.get(UserService);

  //  get the "welcome" element by CSS selector (e.g., by class name)
  de = fixture.debugElement.query(By.css('.welcome'));
  el = de.nativeElement;
});
```

##Some tests: (assuming automatic change detection)
```ts
it('should welcome the user', () => {
  const content = el.textContent;
  expect(content).toContain('Welcome', '"Welcome ..."');
  expect(content).toContain('Test User', 'expected name');
});

it('should welcome "Bubba"', () => {
  userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
  expect(el.textContent).toContain('Bubba');
});

it('should request login if not logged in', () => {
  userService.isLoggedIn = false; // welcome message hasn't been shown yet
  const content = el.textContent;
  expect(content).not.toContain('Welcome', 'not welcomed');
  expect(content).toMatch(/log in/i, '"log in"');
});
```