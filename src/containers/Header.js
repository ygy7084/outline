import React from 'react';
import {
    Link
} from 'react-router-dom'
import Header_Menu from "./Header_Menu";
//ReactRouter

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle_menulist_open : false,
            toggle_header_menu : false,
            footer_active : 'Main'
        };
        this.toggleMinimize = this.toggleMinimize.bind(this);
        this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
        this.activate_footer = this.activate_footer.bind(this);
    }

    toggleMinimize() {
        this.setState({toggle_menulist_open:!this.state.toggle_menulist_open})
    }
    toggleHeaderMenu(menu) {
        if(menu) {
            this.setState({
                toggle_header_menu : menu
            });
        }
        else {
            this.setState({
                toggle_menulist_open : false,
                toggle_header_menu : false
            });
        }
    }
    activate_footer(menu) {
        console.log(menu);
            this.setState({footer_active:menu});
    }

    render() {
        return (
            <div>
                <section className='hero is-primary'>
                    <div className='hero-head'>
                        <header className='nav'>
                            <div className='container'>
                                <div className='nav-left'>
                                    <Link className='nav-item' to='/'>
                                        <h1 className='title is-4'>ServiceOutline</h1>
                                    </Link>
                                </div>
                                <span className={this.state.toggle_menulist_open? 'nav-toggle is-active' : 'nav-toggle'} onClick={this.toggleMinimize}>
                                    <span/>
                                    <span/>
                                    <span/>
                                </span>
                                <div className={this.state.toggle_menulist_open ? "nav-right is-info nav-menu is-active" : "nav-right nav-menu"}>
                                    <a className='nav-item' onClick={()=>{this.toggleHeaderMenu('help')}}><strong>Introduction</strong></a>
                                    <a className='nav-item' onClick={()=>{this.toggleHeaderMenu('signup')}}><strong>SignUp</strong></a>
                                    <a className='nav-item' onClick={()=>{this.toggleHeaderMenu('signin')}}><strong>LogIn</strong></a>
                                    <a className='nav-item' onClick={()=>{this.toggleHeaderMenu('host')}}><strong>Pricing</strong></a>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className='hero-body'>
                        <div className='container has-text-centered'>
                            <h1 className='title'>Title</h1>
                        </div>
                    </div>
                    <div className="hero-foot">
                        <nav className="tabs is-boxed is-fullwidth">
                            <div className="container">
                                <ul>
                                    <li className={this.state.footer_active==='Main'?'is-active':''}><Link onClick={()=>{this.activate_footer('Main');}} to='/'>Main</Link></li>
                                    <li className={this.state.footer_active==='Service1'?'is-active':''}><Link onClick={()=>{this.activate_footer('Service1');}} to='/service1'>Service1</Link></li>
                                    <li className={this.state.footer_active==='Service2'?'is-active':''}><Link onClick={()=>{this.activate_footer('Service2');}} to='/service2'>Service2</Link></li>
                                    <li className={this.state.footer_active==='Service3'?'is-active':''}><Link onClick={()=>{this.activate_footer('Service3');}} to='/service3'>Service3</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
                <div>
                    {this.state.toggle_header_menu? <Header_Menu menu={this.state.toggle_header_menu} close_HeaderMenu={this.toggleHeaderMenu}/> : null}
                </div>
            </div>
        )
    }
}

export default Header;