import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer style={{'backgroundColor':'#8e8e8e'}} className="footer">
                <div className="container">
                    <div className="content has-text-centered is-black">

                       <p>
                           <strong>Business Name</strong>
                           <br/>
                           대표자 : Name
                           <br/>
                           사업자등록번호 : Num
                           <br/>
                           주소 : Location
                           <br/>
                           대표번호 : Phone
                           <br/>
                           Copyright(C) ___ All rights reserved
                       </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;