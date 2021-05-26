import React from 'react';
import Header from "./header";
import own from "./own.jpg";
import AdSense from 'react-adsense';

function about(props) {
    return (
        <div className="imgbg">
            <Header about="active" /><br />
            <center>
                <img src={own} alt="own" className="ownimg" /><br />
                <h2 className="font">Full Stack Developer</h2>
                <table className="font" cellPadding="7">
                    <tr>
                        <td><h5>Name</h5></td>
                        <td><h5>:</h5></td>
                        <td><h5>Yadnesh S Gaikwad</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Mobile No.</h5></td>
                        <td><h5>:</h5></td>
                        <td><h5>9867789635</h5></td>
                    </tr>
                    <tr>
                        <td><h5>Email ID</h5></td>
                        <td><h5>:</h5></td>
                        <td><h5>gaikwadyadnesh@gmail.com</h5></td>
                    </tr>
                </table>
                <AdSense.Google
                client='ca-pub-6719240334551822'
                slot='3589377486'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
            />
            </center>
        </div>
    );
}

export default about;