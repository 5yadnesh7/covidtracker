import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Header from "./header";
import AdSense from 'react-adsense';

function World(props) {

    const [cdata, setcData] = useState([]);
    
    const gets = async () => {
        const country = await fetch("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true");
        const countrydata = await country.json();
        setcData(countrydata);
    }
    
    var ctcols= {
        columns: [
            {
                label: 'Country',
                field: 'country',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Date',
                field: 'lastUpdatedApify',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Infected',
                field: 'infected',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Tested',
                field: 'tested',
                sort: 'asc',
                width: 400,
            },
            {
                label: 'Recovered',
                field: 'recovered',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Deceased',
                field: 'deceased',
                sort: 'asc',
                width: 200,
            }
        ]
    }

    var ctro={
        rows: cdata
    }

    var cdatass = {columns: ctcols.columns, rows: ctro.rows};
    
    useEffect(() => {
        gets();
    },[]);

    return (
        <div className="imgbg">
            <Header world="active" />
            <center>
<div id="container-f7cc02fcab790805fe7ed8a9aba680ef"></div>
            <div className="btn-success"><h2>World Country Wise</h2></div>
            <div className="indiatable1">
            <MDBDataTable
                hover 
                striped
                bordered
                noBottomColumns
                entriesOptions={[5, 10, 15, 20]} 
                entries={5} 
                pagesAmount={5} 
                data={cdatass}
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

export default World;
