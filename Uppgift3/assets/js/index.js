import {getData, processResponse} from './data.js';
import {draw} from './draw.js';

const TABLE = document.getElementById("table");

getData().then(processResponse).then(data => draw(data.results,TABLE));