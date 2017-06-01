// in custom-plotly.js
const Plotly = require('plotly.js/lib/core');
// Load in the trace types for pie, and choropleth
Plotly.register([
    require('plotly.js/lib/pie'),
    require('plotly.js/lib/choropleth'),
    require('plotly.js/lib/bar'),
    require('plotly.js/lib/histogram'),
    require('plotly.js/lib/scatter'),
    require('plotly.js/lib/box'),
    require('plotly.js/lib/heatmap'),
    require('plotly.js/lib/candlestick'),
    require('plotly.js/lib/scattergeo')

]);
module.exports = Plotly;