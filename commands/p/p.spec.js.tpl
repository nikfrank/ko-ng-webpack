import p from './p';
let mename = p.slice(p.lastIndexOf('.')+1).replace(/-([a-z])/g, m=>m[1].toUpperCase());

// import mock services
// import serviceMock from './services/serviceName/s.mock';

describe(p, ()=>{
  let ctrl;
  
  beforeEach(()=>{
    angular.mock.module(p);
    
    angular.mock.inject($componentController=>{
      ctrl = $componentController(mename, {
//	service:serviceMock
      });
    });
  });

  it('should injected', ()=>{
    expect(!!ctrl).toBe(true);
  });
});
