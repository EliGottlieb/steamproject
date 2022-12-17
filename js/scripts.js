import {clickHandler, createHourGraph} from "./graph.js";

let data = [
    {title: "Game1", count: 30},
    {title: "Game2", count: 25},
    {title: "Game3", count: 25},
    {title: "Game4", count: 22},
    {title: "Game5", count: 21},
    {title: "Game6", count: 20},
    {title: "Game7", count: 15},
    {title: "Game8", count: 15},
    {title: "Game9", count: 9},
    {title: "Game10", count: 2},
]
let chart = createHourGraph('chart_0', data)

addEventListener('click', (event) => clickHandler(event, chart))