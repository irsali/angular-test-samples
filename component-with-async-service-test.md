#Spying on the real service

```ts
spy = spyOn(twainService, 'getQuote')
      .and.returnValue(Promise.resolve(testQuote));
```

The spy is designed such that any call to getQuote receives an immediately resolved promise with a test quote. The spy bypasses the actual getQuote method and therefore does not contact the server.

```ts
it('should not show quote before OnInit', () => {
  expect(el.textContent).toBe('', 'nothing displayed');
  expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
});

it('should still not show quote after component initialized', () => {
  fixture.detectChanges();
  // getQuote service is async => still has not returned with quote
  expect(el.textContent).toBe('...', 'no quote yet');
  expect(spy.calls.any()).toBe(true, 'getQuote called');
});

it('should show quote after getQuote promise (async)', async(() => {
  fixture.detectChanges();

  fixture.whenStable().then(() => { // wait for async getQuote
    fixture.detectChanges();        // update view with quote
    expect(el.textContent).toBe(testQuote);
  });
}));

it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
  fixture.detectChanges();
  tick();                  // wait for async getQuote
  fixture.detectChanges(); // update view with quote
  expect(el.textContent).toBe(testQuote);
}));
```

