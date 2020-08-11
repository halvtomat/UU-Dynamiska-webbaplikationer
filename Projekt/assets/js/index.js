import { getData, processResponse } from './data.js';
import { draw } from './draw.js';

const root = document.getElementById("smhi-widget");

const table = document.createElement('table');

getData().then(processResponse).then(data => draw(data, table));

root.appendChild(table);