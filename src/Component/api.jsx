import React from 'react';
import Header from "./header";
import AdSense from 'react-adsense';

function api(props) {
    
    var ind = "https://api.covid19india.org/data.json";
    var vac = "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2021-05-12";
    var world = "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true";

    return (
        <div className="imgbg">
            <Header api="active" />
            <center>
<div id="container-f7cc02fcab790805fe7ed8a9aba680ef"></div>
                <h1 className="font">Welcome to Covid Tracker</h1><br/><br/>
            </center>
            <div id="apidivleftmag">
            <h3>Here you can get fastest api for tacking Covid-19</h3><br/><br/>
            <h3>Api for Fetch Records in India :</h3>
            <h4><a href={ind} className="apilink" target="_blank" rel="noreferrer">{ind}</a></h4><br/><br/>
            <h3>Api for Fetch Records in World :</h3>
            <h4><a href={vac} className="apilink" target="_blank" rel="noreferrer">{vac}</a></h4><br/><br/>
            <h3>Api for Track Vacccinate in India :</h3>
            <h4><a href={world} className="apilink" target="_blank" rel="noreferrer">{world}</a></h4><br/><br/>
            </div>
            <AdSense.Google
                client='ca-pub-6719240334551822'
                slot='3589377486'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
            />
        </div>
    );
}

export default api;
