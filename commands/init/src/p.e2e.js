describe('app component', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(!!browser.getTitle()).toEqual(true);
  });
});
