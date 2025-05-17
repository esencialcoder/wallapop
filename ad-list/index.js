import { initAdController } from './adListController.js';
import { pubSub } from '../pubSub.js';

const adsListElement = document.querySelector('#ads-list');
initAdController(adsListElement, pubSub);
