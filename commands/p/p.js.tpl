import angular from 'angular';
import './p.css';

class Ctrl {
  constructor() {
  }
}
Ctrl.$inject = [];


// this is boilerplate
let p = {
  template: require('./p.html'),
  controller: Ctrl,
  bindings:{}
};
import pname from '../name';
import name from './name';

// import children CHILDREN_IMPORT_HOOK

// import sibling services
//import serviceName from './services/service-name/s';

let mename = name.slice(name.lastIndexOf('.')+1).replace(/-([a-z])/g, m=>m[1].toUpperCase());

export default angular.module(name, [
  //childName CHILDREN_DEP_HOOK

  //serviceName
  
]).component(mename, p).name;
