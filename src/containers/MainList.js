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
                    title:'privahour 성수루프탑',
                    location:'성수',
                    description:'실외 40평, 실내 7평',
                    price:'55,000/hr',
                    url:'/location/sungsu'

                },
                {
                    img:'/img/location/gyeongri/1.jpg',
                    title:'privahour 경리단길',
                    location:'이태원',
                    description:'편한 이용 8명 이내, 한계 인원 14명',
                    price:'55,000/hr',
                    url:'/location/gyeongri'
                },
                {
                    img:'/img/location/graffiti/1.jpg',
                    title:'privahour 그래피티',
                    location:'이태원',
                    description:'편한 이용 12명 이내, 한계 인원 20명',
                    price:'85,000/hr',
                    url:'/location/graffiti'
                }],
            width : 3
        };
        const view_story = {
            com : [
                {
                    img:'/img/i1.png',
                    url:'https://www.instagram.com/privahour/'
                },
                {
                    img:'/img/i2.png',
                    url:'https://www.instagram.com/privahour/'
                },
                {
                    img:'/img/i3.png',
                    url:'https://www.instagram.com/privahour/'
                },
                {
                    img:'/img/i4.png',
                    url:'https://www.instagram.com/privahour/'
                },
                {
                    img:'/img/i5.png',
                    url:'https://www.instagram.com/privahour/'
                },
                {
                    img:'/img/i6.png',
                    url:'https://www.instagram.com/privahour/'
                }],
            width : 3
        };
        let result;
        if(this.props.view==='Location')
            result = view_location;
        else if(this.props.view==='Story')
            result = view_story;

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
                arr.push(<MainList_Column key={index} width={this.state.width} view={this.props.view} list={arr2}/>)
            }
            return arr;
        };

        return(
            <div>
                {dataToComponent(result)}
            </div>
        );
    }
}

export default MainList;