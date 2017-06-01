import React from 'react';
import {
    Link
} from 'react-router-dom'

class MainList_Item extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let card_content;
        let card_image;
        if(this.props.view==='Location'){
            card_content = (
                <div className="card-content">
                    <div className="content">
                        <p className="title is-4">{this.props.content.title}</p>
                        <p className="subtitle is-6">{this.props.content.location}</p>
                    </div>
                    <div className="content">
                        {this.props.content.description}
                    </div>
                    <div className="content">
                        <h3 className='title is-3'>{this.props.content.price}</h3>
                    </div>
                </div>
            );
            card_image = (
                <Link to={this.props.content.url}>
                    <img src={this.props.content.img} alt="Image"/>
                </Link>
            );
        }else {
            card_image = (
                <a href={this.props.content.url}>
                    <img src={this.props.content.img} alt="Image"/>
                </a>
            );
        }
        return(
            <div className={"card column is-paddingless is-"+this.props.column_width}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        {card_image}
                    </figure>
                </div>
                {card_content}
            </div>
        );
    }
}

export default MainList_Item;