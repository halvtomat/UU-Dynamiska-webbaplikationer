import { getData, processResponse } from './data.js';
import { drawTable } from './draw.js';

const root = document.getElementById("smhi-widget");

const table1 = document.createElement('table');
const table2 = document.createElement('table');

const header1 = document.createElement('h3');
const header2 = document.createElement('h3');

header1.innerText = 'Vädret Idag';
header2.innerText = 'Vädret Imorgon';

getData().then(processResponse).then(data => {
    drawTable(data, table1, true);
    drawTable(data, table2, false);
});

root.appendChild(header1);
root.appendChild(table1);
root.appendChild(header2);
root.appendChild(table2);