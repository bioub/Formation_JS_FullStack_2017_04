'use strict';

import moment from 'moment';
import {getIntInclusive} from './random';

export default class Clock {
    constructor(parentElt) {
        this.parentElt = parentElt;
    }

    update() {
        let r = getIntInclusive(0, 255);
        let g = getIntInclusive(0, 255);
        let b = getIntInclusive(0, 255);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        document.body.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
        this.parentElt.innerHTML = moment().format('HH:mm:ss');
    }

    start() {
        this.update();
        setInterval(this.update.bind(this), 1000);
    }
}