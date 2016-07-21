import angular from 'angular';

class Service{
  constructor(){
  }
}
Service.$inject = [];

import name from './name';
let mename = name.slice(name.lastIndexOf('.')+1).replace(/-([a-z])/g, m=>m[1].toUpperCase());

// here import names from uncle services I depend on

export default angular.module(name, [
  // here list the uncle services
]).service(mename, Service).name;
