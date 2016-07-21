import s from './s.js';
let mename = s.slice(s.lastIndexOf('.')+1).replace(/-([a-z])/g, m=>m[1].toUpperCase());

describe(s, function () {

  // load the service's module
  beforeEach(()=> angular.mock.module(s));

  // instantiate service
  var S;
  beforeEach(()=> angular.mock.inject([mename, v=> (S = v)]));

  it('should injected', function () {
    expect(!!S).toBe(true);
  });
});
