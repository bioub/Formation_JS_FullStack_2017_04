'use strict';

import Clock from './clock';

let div = document.querySelector('.horloge');
let clock = new Clock(div);
clock.start();
