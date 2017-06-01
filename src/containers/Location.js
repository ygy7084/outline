import React from 'react';
import {MainList} from './';

class Location extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MainList view='Location'/>
            )
    }
}

export default Location;