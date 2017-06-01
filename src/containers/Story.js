import React from 'react';
import {MainList} from './';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width : 3
        }
    }
    render() {
        return (
            <MainList view='Story'/>
        )
    }
}
export default Story;