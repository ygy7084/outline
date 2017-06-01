import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='card'>
                <div className='card-content has-text-centered'>
                    <h1 className='title is-large'>
                        This is main introduction page
                    </h1>
                </div>
            </div>
        );
    }
}
export default Main;