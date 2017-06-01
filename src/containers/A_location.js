import React from 'react';
import {Header_Menu} from './';
import style from './A_location.scss';

class A_location extends React.Component{
    constructor(props){
        super(props);
        this.state={
            menu : 'desc',
            reserve_view : false
        };
        this.setMenu = this.setMenu.bind(this);
        this.toggle_Reserve_View = this.toggle_Reserve_View.bind(this);
    }
    setMenu(menu) {
        this.setState({menu:menu});
    }
    toggle_Reserve_View() {
        this.setState({
            reserve_view : !this.state.reserve_view
        });
    }
    render() {
        let images;
        let location;
        let content;
        let content_desc;
        let content_info;
        let content_rule;
        if(this.props.match.params.name==='sungsu') {
            images = <img src='/img/location/sungsu/1.jpg' alt='image'/>;
            content_desc = '프라이빗한 루프탑의 대명사!\n우리만의 비밀 아지트!!\n예약제로 딱 한팀만 받아요!!!\n\n인원 추가 비용이 없으니 가성비 최고!\n\n*프로모션!!\n이색적인 모임이라면 꼭 매니저에게 연락주세요. 서비스 팍팍 드린답니다.\n\n\n권장사용인원\n\n-생일파티, 워크샵 30명 내외\n-전시, 문화행사 동시 인원 80명';
            content_info = '- 24Hourds Open\n- 카드게임, 젠가 등\n- 가스버너\n- TV, 에어컨, 냉장고, 에스프레소 머신, 전자레인지';
            content_rule = '사용 후 모든 쓰레기는 쓰레기통에, 분리수거는 꼭 부탁드려요.\n- 분리수거를 하지 않으시면 청소 패널티가 부과됩니다.\n\n사용하신 식기는 주방 아래쪽에 모아주세요.\n과도한 소음 시 민원이 발생합니다.\n도난, 파손 등의 이슈 발생 시 패널티가 부과될 수 있습니다.';
        }
        else if(this.props.match.params.name==='gyeongri') {
            
        }
        else if(this.props.match.params.name==='graffiti') {

        }
        if(this.state.menu==='desc')
            content = content_desc;
        else if(this.state.menu==='info')
            content = content_info;
        else if(this.state.menu==='rule')
            content = content_rule;
        return(
            <div>
            <div className='container'>
                <div className='card'>
                    <div className='columns is-marginless'>
                        <div className="card-image column is-half is-offset-one-quarter is-paddingless">
                            <figure className="image is-4by3">
                                {images}
                            </figure>
                        </div>
                    </div>

                    <div className="card-content is-fullwidth">
                        <div className="content has-text-centered">
                            <p className="title is-4">프리바아워 성수루프탑</p>
                        </div>
                    </div>

                    <div className='card-content is-marginless has-text-centered'>
                        <a className='button is-success is-large' onClick={this.toggle_Reserve_View}>예약하기</a>
                    </div>
                    <div className='card-content'>
                        <div className='tabs is-centered'>
                            <ul>
                                <li className={this.state.menu==='desc'?'is-active':''}><a onClick={()=>{this.setMenu('desc')}}>공간설명</a></li>
                                <li className={this.state.menu==='info'?'is-active':''}><a onClick={()=>{this.setMenu('info')}}>이용정보</a></li>
                                <li className={this.state.menu==='rule'?'is-active':''}><a onClick={()=>{this.setMenu('rule')}}>이용규칙</a></li>
                            </ul>
                        </div>
                        <div className='content' style={{'wordWrap':'break-word','whiteSpace':'pre-wrap'}}>
                            {content}
                        </div>
                    </div>
                    <div className='card-content'>
                        <div className='content has-text-centered'>
                        <h1 className='title is-centered'>Story</h1>
                        </div>
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>양기엽</strong> <small>2017/5/22</small>
                                            <br/>
                                            너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요. 너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요. 너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요.
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>양기엽</strong> <small>2017/5/22</small>
                                            <br/>
                                            너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요. 너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요. 너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요.
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>양기엽</strong> <small>2017/5/22</small>
                                            <br/>
                                            너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요. 너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요. 너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요.
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>양기엽</strong> <small>2017/5/22</small>
                                            <br/>
                                            너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요. 너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요. 너무 좋은 프리바아워. 너무 좋은 프리바아워. 다시 가고 싶습니다. 다음번엔 새로운 곳도 있었으면 좋겠어요.
                                        </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>
                                            <span className="icon level-item is-small"><i className="fa fa-star"/></span>

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
                {this.state.reserve_view ? <Header_Menu menu='reserve' close_HeaderMenu={this.toggle_Reserve_View}/> : null}
            </div>
        );
    }
}
export default A_location;