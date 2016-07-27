import angular from 'angular';
import './p.css';

class Ctrl {
  constructor(){
    // SERVICE_EXPOSURE_HOOK
  }
}
Ctrl.$inject = [];


import pname from '../name';
import name from './name';
let mename = name.slice(name.lastIndexOf('.')+1).replace(/-([a-z])/g, m=>m[1].toUpperCase());

// CHILDREN_IMPORT_HOOK

// SERVICE_IMPORT_HOOK

export default angular.module(name, [
  // CHILDREN_DEP_HOOK

  // SERVICE_DEP_HOOK
  
]).component(mename, {
  template: require('./p.html'),
  controller: Ctrl,
  bindings:{}
}).name;
