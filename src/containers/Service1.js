import React from 'react';
import Plotly from './MyPlotly';

class Service1 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let plot1_1_data = [{
            values: [39822, 36649, 125152, 79460, 68803, 25101, 17768, 11659],
            labels: ['Man', 'Woman', 'Casual', 'Sport', 'Bag', 'Shoes', 'Underwear','Kid'],
            type: 'pie'
        }];
        let plot1_2_data = [{
            values: [39818, 36926, 126035, 78391, 68801, 24751, 17778, 11958],
            labels: ['Man', 'Woman', 'Casual', 'Sport', 'Bag', 'Shoes', 'Underwear','Kid'],
            type: 'pie'
        }];


        let plot1_layout = {
            title:'2015'
        };
        let plot2_layout = {
            title:'2016'
        };

        Plotly.newPlot('plot1_1', plot1_1_data, plot1_layout);
        Plotly.newPlot('plot1_2', plot1_2_data, plot2_layout);
    }
    render() {

        return (
            <div>
                <div className='card'>
                    <div className='card-content has-text-centered'>
                        <h1 className='title'>
                            Fashion Market Size In Korea
                        </h1>
                    </div>
                    <div className='columns'>
                        <div className='column is-half'>
                            <div id='plot1_1'/>
                        </div>
                        <div className='column is-half'>
                            <div id='plot1_2'/>
                        </div>
                    </div>
                    <div className="tabs is-centered is-boxed">
                        <ul>
                            <li className="is-active">
                                <a>
                                    <span>Submenu1</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Submenu2</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Submenu3</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Submenu4</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='container has-text-centered'>
                        <h1 className='title'>
                            Title
                        </h1>
                        <h1 className='subtitle'>
                            Subtitle
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Service1;