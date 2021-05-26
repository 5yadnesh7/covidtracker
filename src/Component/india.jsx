import React, { useEffect, useState } from 'react';
import Header from "./header";
import '../App.css';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AdSense from 'react-adsense';

function India(props) {

    const [data, setData] = useState([]);
    const [ddata, setdData] = useState([]);
    const [total, settotal] = useState([]);
    
    const gets = async () => {
        const sres = await fetch("https://api.covid19india.org/data.json");
        const sda = await sres.json();
        setData(sda.statewise);
        setdData(sda.cases_time_series);
        settotal(sda.statewise[0]);
    }
    
    var stcols= {
        columns: [
            {
                label: 'State',
                field: 'state',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Confirmed',
                field: 'confirmed',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Recoverd',
                field: 'recovered',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Deaths',
                field: 'deaths',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Active',
                field: 'active',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Last Updated Time',
                field: 'lastupdatedtime',
                sort: 'asc',
                width: 200,
            }
        ]
    }

    var stro={
        rows: data
    }

    var ttcols= {
        columns: [
            {
                label: 'Daily Confirmed',
                field: 'dailyconfirmed',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Daily Deceased',
                field: 'dailydeceased',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Daily Recovered',
                field: 'dailyrecovered',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Date',
                field: 'dateymd',
                sort: 'asc',
                width: 400,
            },
            {
                label: 'Total Confirmed',
                field: 'totalconfirmed',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Total Deceased',
                field: 'totaldeceased',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Total Recovered',
                field: 'totalrecovered',
                sort: 'asc',
                width: 200,
            }
        ]
    }

    var ttro={
        rows: ddata
    }

    var sdatass = {columns: stcols.columns, rows: stro.rows};

    var tdatass = {columns: ttcols.columns, rows: ttro.rows};

    useEffect(() => {
        gets();
    },[]);

    return (
        <div className="imgbg">
            <Header india="active" />
            <center>
            <div className="rowhome">
                <div className="columnhome" id="homeactive"><h3>Active : {total.active}</h3></div>
                <div className="columnhome" id="homeconfirmed"><h3>Confirmed : {total.confirmed}</h3></div>
                <div className="columnhome" id="homedeaths"><h3>Deaths : {total.deaths}</h3></div>
                <div className="columnhome" id="homerecovered"><h3>Recovered : {total.recovered}</h3></div>
            </div>
            <div id="homelut"><h3>Last Updated Time : {total.lastupdatedtime}</h3></div>
            <div className="btn-success"><h2>India State Wise</h2></div>
            <div className="indiatable1">
            <MDBDataTable
                hover 
                striped
                bordered
                noBottomColumns
                entriesOptions={[5, 10, 15, 20]} 
                entries={5} 
                pagesAmount={5} 
                data={sdatass}
                paging={true}
                style={{background:"#e1f8dc"}}
            />
            </div>
            <div className="btn-success"><h2>India Time Wise</h2></div>
            <div className="indiatable2">
            <MDBDataTable
                hover 
                striped
                bordered
                noBottomColumns
                entriesOptions={[5, 10, 15, 20]} 
                entries={5} 
                pagesAmount={5} 
                data={tdatass}
                paging={true}
                style={{background:"#e1f8dc"}}
            />
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

export default India;
