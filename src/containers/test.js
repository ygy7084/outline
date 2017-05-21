import React from 'react';
import classNames from 'classnames';
import menu from './test.scss'

class Home extends React.Component {
    render(){
        const cla = classNames('button is-info','is-fullwidth','is-large','is-outlined');
        return (
            <div>
                <section className='hero is-primary is-medium is-bold'>
                    <div className='hero-head'>
                        <header className='nav'>
                            <div className='container'>
                                <div className='nav-left'>
                                    <a className='nav-item'>
                                        <img src="images/bulma-type-white.png" alt="Logo">
                                        </img>
                                    </a>
                                </div>
                                <span className='nav-toggle'>
                                    <span/>
                                    <span/>
                                    <span/>
                                </span>

                                <div className='nav-right nav-menu'>
                                <a className='nav-item is-active'>
                                    Home
                                </a>
                                <a className='nav-item'>
                                    Examples
                                </a>
                                <a className='nav-item'>
                                    Documentation
                                </a>
                                <span className='nav-item'>
                                    <a className='button is-primary is-inverted'>
                                        <span className='icon'>
                                            <i className='fa fa-github'></i>
                                        </span>
                                        <span>Download</span>
                                    </a>
                                </span>
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
                <section className='section'>
                    <div className='container'>
                        <div className='heading'>
                            <h1 className='title'>Section</h1>
                            <h2 className='subtitle'>Subtitle</h2>
                        </div>
                    </div>
                </section>
                <footer className='footer'>
                    <div className='container'>
                        <div className='content has-text-centered'>
                            <p><strong>hihihi</strong></p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home;
