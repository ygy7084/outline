import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
//ReactRouter

import createHistory from 'history/createBrowserHistory';
const history = createHistory();
//Save history so that refresh works well

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle_menu : false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({toggle_menu:!this.state.toggle_menu})
    }

    render() {
        const menu = (
            <ul>
                <li>a1</li>
                <li>a2</li>
                <li>a3</li>
            </ul>
        );
        return (
        <Router history={history}>
            <section className='hero is-primary is-medium is-bold'>
                <div className='hero-head'>
                    <header className='nav'>
                        <div className='container'>
                            <div className='nav-left'>
                                <a className='nav-item'>
                                    <Link to='/'>
                                        <img src='img/logo.jpg' alt='logo'/>
                                    </Link>
                                </a>
                            </div>
                            <span className='nav-toggle' onClick={this.toggleMenu}>
                                {this.state.toggle_menu ? menu : null}
                            </span>

                            <div className='nav-right nav-menu'>
                                <a className='nav-item'>
                                    <Link to='/help'>도움말</Link>
                                </a>
                                <a className='nav-item'>
                                    <Link to='/signup'>회원가입</Link>
                                </a>
                                <a className='nav-item'>
                                    <Link to='/signin'>로그인</Link>
                                </a>
                                <a className='nav-item'>
                                    <Link to='/host'>호스트신청</Link>
                                </a>
                            </div>
                        </div>
                    </header>
                </div>

                <div className='hero-body'>
                    <div className='container has-text-centered'>
                        <h1 className='title'>title</h1>
                        <h2 className='subtitle'>
                            sub
                        </h2>
                    </div>
                </div>
                <div className="hero-foot">
                    <nav className="tabs is-boxed is-fullwidth">
                        <div className="container">
                            <ul>
                                <li className="is-active"><a>Overview</a></li>
                                <li><a>Modifiers</a></li>
                                <li><a>Grid</a></li>
                                <li><a>Elements</a></li>
                                <li><a>Components</a></li>
                                <li><a>Layout</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </Router>
        )
    }
}

export default Header;