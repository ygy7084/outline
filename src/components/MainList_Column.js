import React from 'react';
import {MainList_Item} from './';

class MainList_Column extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dataToComponent = props => {
            return props.list.map((item, i) => {
                return(
                    <MainList_Item
                        key={i}
                        column_width={12/props.width}
                        content={item}
                        view={props.view}
                    />
                )
            })
        };

        return (
            <div className='columns is-marginless is-paddingless'>
                {dataToComponent(this.props)}
            </div>
        );
    }
}

export default MainList_Column;