import React from 'react';
import Home from './test';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
//ReactRouter

import createHistory from 'history/createBrowserHistory';
const history = createHistory();
//Save history so that refresh works well



const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Renderieeng with Reactaa
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Componesnddts
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
);

const BasicExample = () => (
    <Router history={history}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="*" component={Home}/>
        </div>
    </Router>
);

class App extends React.Component {
    render() {
        return (
            <BasicExample/>
        )
    }
}

export default App;
