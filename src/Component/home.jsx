import React, { useState,useEffect } from 'react';
import Header from "./header";
import '../App.css';
import { Chart } from "react-google-charts";
import AdSense from 'react-adsense';

function Home(props) {

    const [total, settotal] = useState([]);
    // eslint-disable-next-line
    const [usr, setuser] = useState();
    // eslint-disable-next-line
    const [u, setu] = useState();

    useEffect(() => {
        gets();
    },[]);
    
    const gets = async () => {
        const sres = await fetch("https://api.covid19india.org/data.json");
        const sda = await sres.json();
        settotal(sda.statewise[0]);

        var active=sda.statewise[0].active,confirmed=sda.statewise[0].confirmed,deaths=sda.statewise[0].deaths,recovered=sda.statewise[0].recovered;
        setuser.active = parseInt(active);
        setuser.confirmed = parseInt(confirmed);
        setuser.deaths = parseInt(deaths);
        setuser.recovered = parseInt(recovered);
        var temp = parseInt(active);
        setu(temp);
        
    }
    
    const options = {
        is3D: true,
        slices: {
            0: { color: '#45ff23' },
            1: { color: '#2080D6' },
            2: { color: '#E9F612' },
            3: { color: '#FF0800' },
        },
        backgroundColor: "transparent",
        fontSize: 14,
        chartArea: {'width': '100%', 'height': '80%'},
    };

    return (
        <div>
            <Header home="active" />
            <center>
            <div className="rowhome">
                <div className="columnhome" id="homeactive"><h3>Active : {total.active}</h3></div>
                <div className="columnhome" id="homeconfirmed"><h3>Confirmed : {total.confirmed}</h3></div>
                <div className="columnhome" id="homedeaths"><h3>Deaths : {total.deaths}</h3></div>
                <div className="columnhome" id="homerecovered"><h3>Recovered : {total.recovered}</h3></div>
            </div>
            <div id="homelut"><h3>Last Updated Time : {total.lastupdatedtime}</h3></div>
            <div>
                <h1>Cases in India</h1>
                <Chart
                    width={'500px'}
                    height={'500px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Type', 'Scores'],
                        ['Recovered', setuser.recovered],
                        ['Confirmed', setuser.confirmed],
                        ['Active', setuser.active],
                        ['Deaths', setuser.deaths],
                    ]}
                    options={options}
                    rootProps={{ 'data-testid': '2' }} />
            </div>
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

export default Home;