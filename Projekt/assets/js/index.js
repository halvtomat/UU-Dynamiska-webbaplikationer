import {getData, processResponse} from './data.js';
import Home from './containers/home.js';

const root = document.getElementById("root");

const screen = Home();
root.innerHTML = screen;