import React from 'react';
import {
    Header,
    Location,
    Footer,
    Story,
    A_location,
    Service1,
    Service2,
    Service3,
    Main
} from './'

import {
    BrowserRouter as Router,
    Route,
    IndexRoute
} from 'react-router-dom'
//ReactRouter

import createHistory from 'history/createBrowserHistory';
const history = createHistory();
//Save history so that refresh works well

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path='*' component={Header}/>
                    <Route exact path='/' component={Main}/>
                    <Route path='/service1' component={Service1}/>
                    <Route path='/service2' component={Service2}/>
                    <Route path='/service3' component={Service3}/>
                    <Route path='*' component={Footer}/>
                </div>
            </Router>
        )
    }
}

export default App;
