import React from 'react';
import style from './Header_Menu.scss';

class Header_Menu extends React.Component {
    constructor(props) {
        super(props);
        this.close_HeaderMenu = this.close_HeaderMenu.bind(this);
    }
    close_HeaderMenu() {
        this.props.close_HeaderMenu();
    }
    render() {
        const help = (
            <div>
                <div className='has-text-centered'>
                    <h1 className='title'>Service Outline</h1>
                </div>
            </div>
        );
        const signup = (
            <div>
                <div className='has-text-centered'>
                    <h1 className='title'>Service Outline</h1>
                </div>
                <div className='field'>
                    <label className='label'>이메일</label>
                    <p className='control'>
                        <input className='input' type='text'/>
                    </p>
                </div>
                <div className='field'>
                    <label className='label'>비밀번호</label>
                    <p className='control'>
                        <input className='input' type='text'/>
                    </p>
                </div>
                <div className='field'>
                    <label className='label'>비밀번호 재입력</label>
                    <p className='control'>
                        <input className='input' type='text'/>
                    </p>
                </div>
                <div className='field'>
                    <label className='label'>이름</label>
                    <p className='control'>
                        <input className='input' type='text'/>
                    </p>
                </div>
                <div className='field'>
                    <label className='label'>휴대폰 번호</label>
                    <p className='control'>
                        <input className='input' type='text'/>
                    </p>
                </div>
                <div className='field'>
                    <label className='label'>어떻게 알게 되셨나요?</label>
                    <p className='control'>
                        <span className="select">
                            <select>
                                <option>선택</option>
                                <option>방문경험있음</option>
                                <option>페이스북</option>
                                <option>블로그</option>
                                <option>인스타그램</option>
                                <option>기타</option>
                            </select>
                        </span>
                    </p>
                </div>
                <div className='field has-text-right'>
                    <a className="button is-primary">가입하기</a>
                </div>
            </div>
        );
        const signin = (
            <div>
                <div className='has-text-centered'>
                    <h1 className='title'>Service Outline</h1>
                </div>
                <div className='field'>
                    <label className='label'>이메일</label>
                    <p className='control'>
                        <input className='input' type='text'/>
                    </p>
                </div>
                <div className='field'>
                    <label className='label'>비밀번호</label>
                    <p className='control'>
                        <input className='input' type='text'/>
                    </p>
                </div>
                <div className='field has-text-right'>
                    <a className="button is-primary">로그인</a>
                </div>
            </div>
        );
        const host = (
            <div>
                <div className='has-text-centered bottom_margin'>
                    <h1 className='title'>Service Outline</h1>
                </div>
                <figure className='image bottom_margin'>
                    <img src='/img/host_img1.png'/>
                </figure>
                <div className='content'>
                    <strong>
                    Pricing
                    </strong>
                </div>
                <div className="field">
                    <label className='label'>이메일</label>
                    <p className='control'>
                        <input className='input' type='text'/>
                    </p>
                </div>
                <div className="field">
                    <label className='label'>상담 내용</label>
                    <p className="control">
                        <textarea className="textarea" placeholder="내용을 입력해주세요"/>
                    </p>
                </div>
                <div className='field has-text-right'>
                    <a className="button is-primary">상담요청하기</a>
                </div>

            </div>
        );
        const reserve = (
            <div>
                <div className='has-text-centered bottom_margin'>
                    <h1 className='title'>프리바아워 성수루프탑</h1>
                </div>
                <div className='has-text-centered bottom_margin'>
                    <h1 className='title'>예약화면입니다.</h1>
                </div>
            </div>
        );
        let result;
        if(this.props.menu==='help')
            result = help;
        else if(this.props.menu==='signup')
            result = signup;
        else if(this.props.menu==='signin')
            result = signin;
        else if(this.props.menu==='host')
            result = host;
        else if(this.props.menu==='reserve')
            result = reserve;

        return (
            <div className='modal is-active'>
                <div className='modal-background' onClick={this.close_HeaderMenu}/>
                <div className='modal-content'>
                    <div className="box">
                        {result}
                    </div>
                </div>
                <button className='modal-close' onClick={this.close_HeaderMenu}/>
            </div>
        );
    }
}

export default Header_Menu;