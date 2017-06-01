import React from 'react';
import axios from 'axios';
import Plotly from './MyPlotly';
import Dropzone from 'react-dropzone';

const apiKey = "f1ea0789959e034cdb46c7526b17968a";

class Service3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brandPreChecker : {
                input : '',
                good:0,
                bad:0,
                brand:[]
            }
        };
        this.plot = this.plot.bind(this);
        this.brandPreChecker = this.brandPreChecker.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.imgSend = this.imgSend.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    componentDidMount() {
        this.plot(1);
    }
    plot(n) {
        if(n===1) {
            let data = [{
                type: 'bar',
                x: [this.state.brandPreChecker.bad, this.state.brandPreChecker.good],
                y: ['bad', 'good'],
                orientation: 'h'
            }];

            Plotly.newPlot('plot1', data);
        }
    }
    brandPreChecker() {
        let temp = JSON.stringify({
            'api_key': apiKey,
            'data': this.state.brandPreChecker.input,
            'threshold': 0.01});
        let temp2 = JSON.stringify({
            'api_key': apiKey,
            'data': this.state.brandPreChecker.input});
        let changeState = function(val,brand) {
            this.setState({
                brandPreChecker : {
                    good:val,
                    bad:1-val,
                    brand:brand
                }
            });
            this.plot(1);
        }.bind(this);
        axios.post('https://apiv2.indico.io/organizations',temp).then(function(res) {
            axios.post(
                'https://apiv2.indico.io/sentimenthq',
                temp2
            ).then(function(res2) {
                console.log(res);
                console.log(res2);
                let a = [];
                res.data.results.map((obj,i) => {
                    a.push(<h2>{obj.text}</h2>);
                });
                changeState(res2.data.results,a);
            });

        });
    }
    inputChange(e) {
        this.setState({
            brandPreChecker : {
                input : e.target.value
            }
        });
    }
    imgSend() {
        const img = '/test/me.png';
        axios.post(
            'https://apiv2.indico.io/fer',
            JSON.stringify({
                'api_key': apiKey,
                'data': 'http://www.lipitorcare.com/wp-content/uploads/2015/08/Smile-14.jpg',
                'detect': true
            })
        ).then(function(res) { console.log(res.data) }).catch(function(e){console.log(e)});
    }
    onDrop (fileArray) {
        let file = fileArray[0];
        // const req = request.post('/image');
        let filename = file.name;
        let data = new FormData();
        data.append('name', filename);
        data.append('file', file);
        axios.post('/image', data);
    }
    render() {
        return (
            <div className='card'>
                <div className='card-content has-text-centered'>
                    <h1 className='title is-large'>
                        Test
                    </h1>
                    <div className="field">
                        <label className="label">Brand Preference Checker</label>
                        <p className="control">
                            <textarea className="textarea" onChange={this.inputChange} placeholder="input here"/>
                        </p>
                    </div>
                    <div className="field">
                        <a className='is-primary' onClick={this.brandPreChecker}>check</a>
                    </div>
                    <h1 className='title'>
                        {!this.state.brandPreChecker.brand ? null : this.state.brandPreChecker.brand}
                    </h1>
                    <div id='plot1'/>
                    <div className="field">
                        <a className='is-primary' onClick={this.imgSend}>test</a>
                    </div>

                    <div className="field">
                        <label className="label">Fahion Image</label>
                        <p className="control">
                            <Dropzone onDrop={this.onDrop.bind(this)}>
                                Image
                            </Dropzone>
                        </p>
                    </div>
                    <div className="field">
                        <a className='is-primary' onClick={this.brandPreChecker}>check</a>
                    </div>
                    <h1 className='title'>
                        {!this.state.brandPreChecker.brand ? null : this.state.brandPreChecker.brand}
                    </h1>
                    <div id='plot1'/>
                    <div className="field">
                        <a className='is-primary' onClick={this.imgSend}>test</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Service3;