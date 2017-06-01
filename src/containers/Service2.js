import React from 'react';
import Plotly from './MyPlotly';

class Service2 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv', function(err, rows){
            let YEAR = 2007;
            let continents = ['Asia', 'Europe', 'Africa', 'Oceania', 'Americas'];
            let POP_TO_PX_SIZE = 2e5;
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }

            let data = continents.map(function(continent) {
                let rowsFiltered = rows.filter(function(row) {
                    return (row.continent === continent) && (+row.year === YEAR);
                });
                return {
                    mode: 'markers',
                    name: continent,
                    x: unpack(rowsFiltered, 'lifeExp'),
                    y: unpack(rowsFiltered, 'gdpPercap'),
                    text: unpack(rowsFiltered, 'country'),
                    marker: {
                        sizemode: 'area',
                        size: unpack(rowsFiltered, 'pop'),
                        sizeref: POP_TO_PX_SIZE
                    }
                };
            });
            let layout = {
                xaxis: {title: 'Life Expectancy'},
                yaxis: {title: 'GDP per Capita', type: 'log'},
                margin: {t: 20},
                hovermode: 'closest'
            };
            Plotly.plot('plot1', data, layout, {showLink: false});
        });
        function plot2() {
            let country = ['Switzerland (2011)', 'Chile (2013)', 'Japan (2014)', 'United States (2012)', 'Slovenia (2014)', 'Canada (2011)', 'Poland (2010)', 'Estonia (2015)', 'Luxembourg (2013)', 'Portugal (2011)'];

            let votingPop = [40, 45.7, 52, 53.6, 54.1, 54.2, 54.5, 54.7, 55.1, 56.6];

            let regVoters = [49.1, 42, 52.7, 84.3, 51.7, 61.1, 55.3, 64.2, 91.1, 58.9];

            let trace1 = {
                type: 'scatter',
                x: votingPop,
                y: country,
                mode: 'markers',
                name: 'Percent of estimated voting age population',
                marker: {
                    color: 'rgba(156, 165, 196, 0.95)',
                    line: {
                        color: 'rgba(156, 165, 196, 1.0)',
                        width: 1,
                    },
                    symbol: 'circle',
                    size: 16
                }
            };

            let trace2 = {
                x: regVoters,
                y: country,
                mode: 'markers',
                name: 'Percent of estimated registered voters',
                marker: {
                    color: 'rgba(204, 204, 204, 0.95)',
                    line: {
                        color: 'rgba(217, 217, 217, 1.0)',
                        width: 1,
                    },
                    symbol: 'circle',
                    size: 16
                }
            };

            let data = [trace1, trace2];

            let layout = {
                title: 'Votes cast for ten lowest voting age population in OECD countries',
                xaxis: {
                    showgrid: false,
                    showline: true,
                    linecolor: 'rgb(102, 102, 102)',
                    titlefont: {
                        font: {
                            color: 'rgb(204, 204, 204)'
                        }
                    },
                    tickfont: {
                        font: {
                            color: 'rgb(102, 102, 102)'
                        }
                    },
                    autotick: false,
                    dtick: 10,
                    ticks: 'outside',
                    tickcolor: 'rgb(102, 102, 102)'
                },
                margin: {
                    l: 140,
                    r: 40,
                    b: 50,
                    t: 80
                },
                legend: {
                    font: {
                        size: 10,
                    },
                    yanchor: 'middle',
                    xanchor: 'right'
                },
                width: 600,
                height: 600,
                paper_bgcolor: 'rgb(254, 247, 234)',
                plot_bgcolor: 'rgb(254, 247, 234)',
                hovermode: 'closest'
            };

            Plotly.newPlot('plot2', data, layout);
        }

        function plot3() {
            let trace1 = {
                x: [1, 2, 3, 4],
                y: [10, 11, 12, 13],
                text: ['Asize: 40', 'Bsize: 60', 'Csize: 80', 'Dsize: 100'],
            mode: 'markers',
                marker: {
                color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
                    size: [40, 60, 80, 100]
            }
        };

            let data = [trace1];

            let layout = {
                title: 'Bubble Chart Hover Text',
                showlegend: false,
                height: 600,
                width: 600
            };

            Plotly.newPlot('plot3', data, layout);
        }

        function plot4() {
            let trace1 = {
                x: [1, 2, 3, 4],
                y: [0, 2, 3, 5],
                fill: 'tozeroy',
                type: 'scatter'
            };

            let trace2 = {
                x: [1, 2, 3, 4],
                y: [3, 5, 1, 7],
                fill: 'tonexty',
                type: 'scatter'
            };

            let data = [trace1, trace2];

            Plotly.newPlot('plot4', data);
        }
        function plot5() {
            let trace1 = {
                x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
                y: [219, 146, 112, 127, 124, 180, 236, 207, 236, 263, 350, 430, 474, 526, 488, 537, 500, 439],
                name: 'Rest of world',
                marker: {color: 'rgb(55, 83, 109)'},
                type: 'bar'
            };

            let trace2 = {
                x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
                y: [16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270, 299, 340, 403, 549, 499],
                name: 'China',
                marker: {color: 'rgb(26, 118, 255)'},
                type: 'bar'
            };

            let data = [trace1, trace2];

            let layout = {
                title: 'US Export of Plastic Scrap',
                xaxis: {tickfont: {
                    size: 14,
                    color: 'rgb(107, 107, 107)'
                }},
                yaxis: {
                    title: 'USD (millions)',
                    titlefont: {
                        size: 16,
                        color: 'rgb(107, 107, 107)'
                    },
                    tickfont: {
                        size: 14,
                        color: 'rgb(107, 107, 107)'
                    }
                },
                legend: {
                    x: 0,
                    y: 1.0,
                    bgcolor: 'rgba(255, 255, 255, 0)',
                    bordercolor: 'rgba(255, 255, 255, 0)'
                },
                barmode: 'group',
                bargap: 0.15,
                bargroupgap: 0.1
            };

            Plotly.newPlot('plot5', data, layout);
        }
        function plot6() {
            let data = [{
                type: 'bar',
                x: [20, 14, 23],
                y: ['giraffes', 'orangutans', 'monkeys'],
                orientation: 'h'
            }];

            Plotly.newPlot('plot6', data);
        }
        function plot7() {
            // Enter a speed between 0 and 180
            let level = 175;

// Trig to calc meter point
            let degrees = 180 - level,
                radius = .5;
            let radians = degrees * Math.PI / 180;
            let x = radius * Math.cos(radians);
            let y = radius * Math.sin(radians);

// Path: may have to change to create a better triangle
            let mainPath = 'M -.0 -0.025 L .0 0.025 L ',
                pathX = String(x),
                space = ' ',
                pathY = String(y),
                pathEnd = ' Z';
            let path = mainPath.concat(pathX,space,pathY,pathEnd);

            let data = [{ type: 'scatter',
                x: [0], y:[0],
                marker: {size: 28, color:'850000'},
                showlegend: false,
                name: 'speed',
                text: level,
                hoverinfo: 'text+name'},
                { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
                    rotation: 90,
                    text: ['TOO FAST!', 'Pretty Fast', 'Fast', 'Average',
                        'Slow', 'Super Slow', ''],
                    textinfo: 'text',
                    textposition:'inside',
                    marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
                        'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
                        'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
                        'rgba(255, 255, 255, 0)']},
                    labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
                    hoverinfo: 'label',
                    hole: .5,
                    type: 'pie',
                    showlegend: false
                }];

            let layout = {
                shapes:[{
                    type: 'path',
                    path: path,
                    fillcolor: '850000',
                    line: {
                        color: '850000'
                    }
                }],
                title: 'GaugeSpeed 0-100',
                height: 500,
                width: 500,
                xaxis: {zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1]},
            yaxis: {zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1]}
        };

            Plotly.newPlot('plot7', data, layout);
        }
        function plot8() {
            let trace1 = {
                x: [0, 1, 2, 3, 4, 5],
                y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
                type: 'scatter'
            };

            let trace2 = {
                x: [0, 1, 2, 3, 4, 5],
                y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
                type: 'bar'
            };

            let data = [trace1, trace2];

            Plotly.newPlot('plot8', data);
        }
        function plot9() {
            let trace1 = {
                x: ['Trial 1', 'Trial 2', 'Trial 3'],
                y: [3, 6, 4],
                name: 'Control',
                error_y: {
                    type: 'data',
                    array: [1, 0.5, 1.5],
                    visible: true
                },
                type: 'bar'
            };
            let trace2 = {
                x: ['Trial 1', 'Trial 2', 'Trial 3'],
                y: [4, 7, 3],
                name: 'Experimental',
                error_y: {
                    type: 'data',
                    array: [0.5, 1, 2],
                    visible: true
                },
                type: 'bar'
            };
            let data = [trace1, trace2];
            let layout = {barmode: 'group'};
            Plotly.newPlot('plot9', data, layout);
        }
        function plot10() {
            let xData = ['Carmelo\nAnthony', 'Dwyane\nWade',
                'Deron\nWilliams', 'Brook\nLopez',
                'Damian\nLillard', 'David\nWest',
                'Blake\nGriffin', 'David\nLee',
                'Demar\nDerozan'];

            function getrandom(num , mul)
            {
                let value = [];
                for(let i=0;i<=num;i++)
                {
                    let rand = Math.random() * mul;
                    value.push(rand);
                }
                return value;
            }

            let yData = [
                getrandom(30 ,10),
                getrandom(30, 20),
                getrandom(30, 25),
                getrandom(30, 40),
                getrandom(30, 45),
                getrandom(30, 30),
                getrandom(30, 20),
                getrandom(30, 15),
                getrandom(30, 43),
            ];
            let colors = ['rgba(93, 164, 214, 0.5)', 'rgba(255, 144, 14, 0.5)', 'rgba(44, 160, 101, 0.5)', 'rgba(255, 65, 54, 0.5)', 'rgba(207, 114, 255, 0.5)', 'rgba(127, 96, 0, 0.5)', 'rgba(255, 140, 184, 0.5)', 'rgba(79, 90, 117, 0.5)', 'rgba(222, 223, 0, 0.5)'];

            let data = [];

            for ( let i = 0; i < xData.length; i ++ ) {
                let result = {
                    type: 'box',
                    y: yData[i],
                    name: xData[i],
                    boxpoints: 'all',
                    jitter: 0.5,
                    whiskerwidth: 0.2,
                    fillcolor: 'cls',
                    marker: {
                        size: 2
                    },
                    line: {
                        width: 1
                    }
                };
                data.push(result);
            };

            let layout = {
                title: 'Points Scored by the Top 9 Scoring NBA Players in 2012',
                yaxis: {
                    autorange: true,
                    showgrid: true,
                    zeroline: true,
                    dtick: 5,
                    gridcolor: 'rgb(255, 255, 255)',
                    gridwidth: 1,
                    zerolinecolor: 'rgb(255, 255, 255)',
                    zerolinewidth: 2
                },
                margin: {
                    l: 40,
                    r: 30,
                    b: 80,
                    t: 100
                },
                paper_bgcolor: 'rgb(243, 243, 243)',
                plot_bgcolor: 'rgb(243, 243, 243)',
                showlegend: false
            };

            Plotly.newPlot('plot10', data, layout);
        }
        function plot11() {
            let boxNumber = 30;
            let boxColor = [];
            let allColors = [];
            for(let i=0;i<30;i++)
                allColors.push((360/boxNumber)*i);
            let data = [];
            let yValues = [];

//Colors

            for( let i = 0; i < boxNumber;  i++ ){
                let result = 'hsl('+ allColors[i] +',50%'+',50%)';
                boxColor.push(result);
            }

            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            };

//Create Y Values

            for( let i = 0; i < boxNumber;  i++ ){
                let ySingleArray = [];
                for( let j = 0; j < 10;  j++ ){
                    let randomNum = getRandomArbitrary(0, 1);
                    let yIndValue = 3.5*Math.sin(Math.PI * i/boxNumber) + i/boxNumber+(1.5+0.5*Math.cos(Math.PI*i/boxNumber))*randomNum;
                    ySingleArray.push(yIndValue);
                }
                yValues.push(ySingleArray);
            }

//Create Traces

            for( let i = 0; i < boxNumber;  i++ ){
                let result = {
                    y: yValues[i],
                    type:'box',
                    marker:{
                        color: boxColor[i]
                    }
                };
                data.push(result);
            };

//Format the layout

            let layout = {
                xaxis: {
                    showgrid: false,
                    zeroline: false,
                    tickangle: 60,
                    showticklabels: false
                },
                yaxis: {
                    zeroline: false,
                    gridcolor: 'white'
                },
                paper_bgcolor: 'rgb(233,233,233)',
                plot_bgcolor: 'rgb(233,233,233)',
                showlegend:false
            };


            Plotly.newPlot('plot11', data, layout);
        }
        function plot12() {
            let x1 = [];
            let x2 = [];
            let y1 = [];
            let y2 = [];
            for (let i = 1; i < 500; i++)
            {
                let k = Math.random();
                x1.push(k*5);
                x2.push(k*10);
                y1.push(k);
                y2.push(k*2);
            }
            let trace1 = {
                x: x1,
                y: y1,
                name: 'control',
                autobinx: false,
                histnorm: "count",
                marker: {
                    color: "rgba(255, 100, 102, 0.7)",
                    line: {
                        color:  "rgba(255, 100, 102, 1)",
                        width: 1
                    }
                },
                opacity: 0.5,
                type: "histogram",
                xbins: {
                    end: 2.8,
                    size: 0.06,
                    start: .5
                }
            };
            let trace2 = {
                x: x2,
                y: y2,
                autobinx: false,
                marker: {
                    color: "rgba(100, 200, 102, 0.7)",
                    line: {
                        color:  "rgba(100, 200, 102, 1)",
                        width: 1
                    }
                },
                name: "experimental",
                opacity: 0.75,
                type: "histogram",
                xbins: {
                    end: 4,
                    size: 0.06,
                    start: -3.2

                }
            };
            let data = [trace1, trace2];
            let layout = {
                bargap: 0.05,
                bargroupgap: 0.2,
                barmode: "overlay",
                title: "Sampled Results",
                xaxis: {title: "Value"},
                yaxis: {title: "Count"}
            };
            Plotly.newPlot('plot12', data, layout);
        }
        function plot13() {
            let data = [
                {
                    z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
                    x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    y: ['Morning', 'Afternoon', 'Evening'],
                    type: 'heatmap'
                }
            ];

            Plotly.newPlot('plot13', data);
        }
        function plot14() {
            let trace1 = {
                r: [77.5, 72.5, 70.0, 45.0, 22.5, 42.5, 40.0, 62.5],
                t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
                name: '11-14 m/s',
                marker: {color: 'rgb(106,81,163)'},
                type: 'area'
            };

            let trace2 = {
                r: [57.5, 50.0, 45.0, 35.0, 20.0, 22.5, 37.5, 55.0],
                t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
                name: '8-11 m/s',
                marker: {color: 'rgb(158,154,200)'},
                type: 'area'
            };

            let trace3 = {
                r: [40.0, 30.0, 30.0, 35.0, 7.5, 7.5, 32.5, 40.0],
                t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
                name: '5-8 m/s',
                marker: {color: 'rgb(203,201,226)'},
                type: 'area'
            };

            let trace4 = {
                r: [20.0, 7.5, 15.0, 22.5, 2.5, 2.5, 12.5, 22.5],
                t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
                name: '< 5 m/s',
                marker: {color: 'rgb(242,240,247)'},
                type: 'area'
            };

            let data = [trace1, trace2, trace3, trace4];

            let layout = {
                title: 'Wind Speed Distribution in Laurel, NE',
                font: {size: 16},
                legend: {font: {size: 16}},
                radialaxis: {ticksuffix: '%'},
                orientation: 270
            };

            Plotly.newPlot('plot14', data, layout);
        }
        function plot15() {
            let data = [
                {
                    x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                    y: [1, 3, 6],
                    type: 'scatter'
                }
            ];

            Plotly.newPlot('plot15', data);
        }
        function plot16() {
            Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){

                function unpack(rows, key) {
                    return rows.map(function(row) {
                        return row[key];
                    });
                }

                let trace = {
                    x: unpack(rows, 'Date'),
                    close: unpack(rows, 'AAPL.Close'),
                    high: unpack(rows, 'AAPL.High'),
                    low: unpack(rows, 'AAPL.Low'),
                    open: unpack(rows, 'AAPL.Open'),

                    // cutomise colors
                    increasing: {line: {color: 'black'}},
                    decreasing: {line: {color: 'red'}},

                    type: 'candlestick',
                    xaxis: 'x',
                    yaxis: 'y'
                };

                let data = [trace];

                let layout = {
                    dragmode: 'zoom',
                    showlegend: false,
                    xaxis: {
                        title: 'Date',
                        range: ['2016-06-01 12:00', '2017-01-01 12:00']
                    },
                    yaxis: {
                        autorange: true,
                    }
                };

                Plotly.plot('plot16', data, layout);
            });
        }
        function plot17() {
            let trace1 = {

                x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'],

                close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995],

                decreasing: {line: {color: '#7F7F7F'}},

                high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004],

                increasing: {line: {color: '#17BECF'}},

                line: {color: 'rgba(31,119,180,1)'},

                low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995],

                open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004],

                type: 'candlestick',
                xaxis: 'x',
                yaxis: 'y'
            };

            let data = [trace1];

            let layout = {
                dragmode: 'zoom',
                margin: {
                    r: 10,
                    t: 25,
                    b: 40,
                    l: 60
                },
                showlegend: false,
                xaxis: {
                    autorange: true,
                    domain: [0, 1],
                    range: ['2017-01-03 12:00', '2017-02-15 12:00'],
                    rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']},
                    title: 'Date',
                    type: 'date'
                },
                yaxis: {
                    autorange: true,
                    domain: [0, 1],
                    range: [114.609999778, 137.410004222],
                    type: 'linear'
                }
            };

            Plotly.plot('plot17', data, layout);
        }
        function plot18() {
            Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv', function(err, rows){
                function unpack(rows, key) {
                    return rows.map(function(row) { return row[key]; });
                }

                let data = [{
                    type: 'choropleth',
                    locationmode: 'USA-states',
                    locations: unpack(rows, 'code'),
                    z: unpack(rows, 'total exports'),
                    text: unpack(rows, 'state'),
                    zmin: 0,
                    zmax: 17000,
                    colorscale: [
                        [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                        [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                        [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
                    ],
                    colorbar: {
                        title: 'Millions USD',
                        thickness: 0.2
                    },
                    marker: {
                        line:{
                            color: 'rgb(255,255,255)',
                            width: 2
                        }
                    }
                }];


                let layout = {
                    title: '2011 US Agriculture Exports by State',
                    geo:{
                        scope: 'usa',
                        showlakes: true,
                        lakecolor: 'rgb(255,255,255)'
                    }
                };

                Plotly.plot('plot18', data, layout, {showLink: false});
            });
        }
        function plot20() {
            Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_february_us_airport_traffic.csv', function(err, rows){

                function unpack(rows, key) {
                    return rows.map(function(row) { return row[key]; });
                }

                let scl = [[0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],[0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],[0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']];

                let data = [{
                    type:'scattergeo',
                    locationmode: 'USA-states',
                    lon: unpack(rows, 'long'),
                    lat: unpack(rows, 'lat'),
                    hoverinfor:  unpack(rows, 'airport'),
                    text:  unpack(rows, 'airport'),
                    mode: 'markers',
                    marker: {
                        size: 8,
                        opacity: 0.8,
                        reversescale: true,
                        autocolorscale: false,
                        symbol: 'square',
                        line: {
                            width: 1,
                            color: 'rgb(102,102,102)'
                        },
                        colorscale: scl,
                        cmin: 0,
                        color: unpack(rows, 'cnt'),
                        colorbar: {
                            title: 'Incoming Flights February 2011'
                        }
                    }
                }];


                let layout = {
                    title: 'Most Trafficked US airports',
                    colorbar: true,
                    geo: {
                        scope: 'usa',
                        projection: {
                            type: 'albers usa'
                        },
                        showland: true,
                        landcolor: 'rgb(250,250,250)',
                        subunitcolor: 'rgb(217,217,217)',
                        countrycolor: 'rgb(217,217,217)',
                        countrywidth: 0.5,
                        subunitwidth: 0.5
                    }
                };

                Plotly.plot('plot20', data, layout, {showLink: false});

            });
        }
        function plot21() {
            Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv', function(err, rows){

                function unpack(rows, key) {
                    return rows.map(function(row) { return row[key]; });
                }

                let cityName = unpack(rows, 'name'),
                    cityPop = unpack(rows, 'pop'),
                    cityLat = unpack(rows, 'lat'),
                    cityLon = unpack(rows, 'lon'),
                    color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
                    citySize = [],
                    hoverText = [],
                    scale = 50000;

                for ( let i = 0 ; i < cityPop.length; i++) {
                    let currentSize = cityPop[i] / scale;
                    let currentText = cityName[i] + " pop: " + cityPop[i];
                    citySize.push(currentSize);
                    hoverText.push(currentText);
                }

                let data = [{
                    type: 'scattergeo',
                    locationmode: 'USA-states',
                    lat: cityLat,
                    lon: cityLon,
                    hoverinfo: 'text',
                    text: hoverText,
                    marker: {
                        size: citySize,
                        line: {
                            color: 'black',
                            width: 2
                        },
                    }
                }];

                let layout = {
                    title: '2014 US City Populations',
                    showlegend: false,
                    geo: {
                        scope: 'usa',
                        projection: {
                            type: 'albers usa'
                        },
                        showland: true,
                        landcolor: 'rgb(217, 217, 217)',
                        subunitwidth: 1,
                        countrywidth: 1,
                        subunitcolor: 'rgb(255,255,255)',
                        countrycolor: 'rgb(255,255,255)'
                    },
                };

                Plotly.plot('plot21', data, layout, {showLink: false});

            });
        }
        function plot24() {
            let trace1 = {
                x: [0, 1, 2],
                y: [10, 11, 12],
                type: 'scatter'
            };

            let trace2 = {
                x: [2, 3, 4],
                y: [100, 110, 120],
                yaxis: 'y2',
                type: 'scatter'
            };

            let trace3 = {
                x: [3, 4, 5],
                y: [1000, 1100, 1200],
                yaxis: 'y3',
                type: 'scatter'
            };

            let data = [trace1, trace2, trace3];

            let layout = {
                yaxis: {domain: [0, 0.33]},
                legend: {traceorder: 'reversed'},
                yaxis2: {domain: [0.33, 0.66]},
                yaxis3: {domain: [0.66, 1]}
            };

            Plotly.newPlot('plot24', data, layout);
        }
        function plot25() {
            let trace1 = {
                x: [1, 2, 3],
                y: [4, 5, 6],
                type: 'scatter'
            };

            let trace2 = {
                x: [20, 30, 40],
                y: [50, 60, 70],
                xaxis: 'x2',
                yaxis: 'y2',
                type: 'scatter'
            };

            let data = [trace1, trace2];

            let layout = {
                xaxis: {domain: [0, 0.45]},
                yaxis2: {anchor: 'x2'},
                xaxis2: {domain: [0.55, 1]}
            };

            Plotly.newPlot('plot25', data, layout);
        }
        function plot26() {
            Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/wind_speed_laurel_nebraska.csv', function(rows){
                let trace = {
                    type: 'scatter',                    // set the chart type
                    mode: 'lines',                      // connect points with lines
                    x: rows.map(function(row){          // set the x-data
                        return row['Time'];
                    }),
                    y: rows.map(function(row){          // set the x-data
                        return row['10 Min Sampled Avg'];
                    }),
                    line: {                             // set the width of the line.
                        width: 1
                    },
                    error_y: {
                        array: rows.map(function(row){    // set the height of the error bars
                            return row['10 Min Std Dev'];
                        }),
                        thickness: 0.5,                   // set the thickness of the error bars
                        width: 0
                    }
                };

                let layout = {
                    yaxis: {title: "Wind Speed"},       // set the y axis title
                    xaxis: {
                        showgrid: false,                  // remove the x-axis grid lines
                        tickformat: "%B, %Y"              // customize the date format to "month, day"
                    },
                    margin: {                           // update the left, bottom, right, top margin
                        l: 40, b: 10, r: 10, t: 20
                    }
                };

                Plotly.plot(document.getElementById('plot26'), [trace], layout, {showLink: false});
            });
        }
        plot2();
        plot3();
        plot4();
        plot5();
        plot6();
        plot7();
        plot8();
        plot9();
        plot10();
        plot11();
        plot12();
        plot13();
        plot14();
        plot15();
        plot16();
        plot17();
        plot18();
        plot20();
        plot21();
        plot24();
        plot25();
        plot26();
    }

    render() {
        return (

            <div>
                <div className='card'>
                    <div className='card-content has-text-centered'>
                        <h1 className='title'>
                            We can use these charts
                        </h1>
                    </div>
                    <div className='card-content'>
                        <div id='plot1'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot2'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot3'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot4'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot5'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot6'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot7'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot8'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot9'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot10'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot11'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot12'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot13'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot14'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot15'/>
                    </div>
                    <div className='card-content'>
                        <div id='plot16'/>
                    </div>
                    <div className='card-content'>
                        <div id='plot17'/>
                    </div>
                    <div className='card-content'>
                        <div id='plot18'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot19'/>
                    </div>
                    <div className='card-content'>
                        <div id='plot20'/>
                    </div>
                    <div className='card-content'>
                        <div id='plot21'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot22'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot23'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot24'/>
                    </div>
                    <div className='card-content column is-half is-offset-one-quarter'>
                        <div id='plot25'/>
                    </div>
                    <div className='card-content'>
                        <div id='plot26'/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Service2;