import React from 'react';
import {MainList_Column} from '../components';

class MainList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width : 3
        }
    }
    render() {
        const view_location = {
            com : [
                {
                    img:'/img/location/sungsu/1.jpg',
                    title:'PrivaHour'
                },
                {
                    img:'/img/location/gyeongri/1.jpg'
                },
                {
                    img:'/img/location/graffiti/1.jpg'
                }],
            width : 3
        };
        const view_story = {
            com : [
                {
                    img:'/img/i1.png'
                },
                {
                    img:'/img/i2.png'
                },
                {
                    img:'/img/i3.png'
                },
                {
                    img:'/img/i4.png'
                },
                {
                    img:'/img/i5.png'
                }],
            width : 3
        };
        const dataToComponent = (props) => {
            let arr = [];
            let index = 0;
            while(props.com[index]) {
                let arr2 = [];
                let arr2_index = 0;
                while(props.com[index] && arr2_index<this.state.width) {
                    arr2.push(props.com[index]);
                    index++;
                    arr2_index++;
                }
                arr.push(<MainList_Column key={index} width={this.state.width} list={arr2}/>)
            }
            return arr;
        };
        let result;
        if(this.props.view==='Location')
            result = view_location;
        else if(this.props.view==='Story')
            result = view_story;
        return(
            <div>
                {dataToComponent(result)}
            </div>
        );
    }
}

export default MainList;