import React from 'react';
import {MainList} from './';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MainList view='Location'/>
            )
    }
}

export default Home;