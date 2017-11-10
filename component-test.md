```ts
it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
});

it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
});

it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
});
```