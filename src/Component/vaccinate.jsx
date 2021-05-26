import React, { useEffect, useState } from 'react';
import Header from "./header";
import '../App.css';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AdSense from 'react-adsense';

function Vaccinate(props) {
    
    const [rdata, setrData] = useState([]);
    const [byvacdata, setbyvacData] = useState([]);
    const [byvacagedata, setbyvacageData] = useState([]);
    const [byvacstatedata, setbystateData] = useState([]);

    const gets = async () => {
        const ch = await fetch("https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2021-05-12");
        const chhh = await ch.json();
        setrData(chhh.topBlock.registration);
        setbyvacData(chhh.topBlock.vaccination);
        setbyvacageData(chhh.vaccinationByAge);
        setbystateData(chhh.getBeneficiariesGroupBy);
    }
    
    var ctcols= {
        columns: [
            {
                label: 'State',
                field: 'state_name',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Partial Vaccinated',
                field: 'partial_vaccinated',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Today',
                field: 'today',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Total',
                field: 'total',
                sort: 'asc',
                width: 400,
            },
            {
                label: 'Totally Vaccinated',
                field: 'totally_vaccinated',
                sort: 'asc',
                width: 200
            }
        ]
    }

    var ctro={
        rows: byvacstatedata
    }

    var cdatass = {columns: ctcols.columns, rows: ctro.rows};
    
    useEffect(() => {
        gets();
    },[]);
    return (
        <div className="imgbg">
            <Header vacine="active" />
            <center>
            <div className="btn-success"><h2>Record of Registration</h2></div>
            <div className="rowhome">
                <div className="columnhome columnvaccinate"><h4>Register by 18-45 age : {rdata.cit_18_45}</h4></div>
                <div className="columnhome columnvaccinate"><h4>Register by 45 to above age : {rdata.cit_45_above}</h4></div>
                <div className="columnhome columnvaccinate"><h4>Register Today : {rdata.today}</h4></div>
                <div className="columnhome columnvaccinate"><h4>Register Total : {rdata.total}</h4></div>
            </div>
            <div className="btn-success"><h2>Record By Gender</h2></div>
            <div className="row3">
                <div className="column3 columnvaccinate3"><h4>By Male : {byvacdata.male}</h4></div>
                <div className="column3 columnvaccinate3"><h4>By Female : {byvacdata.female}</h4></div>
                <div className="column3 columnvaccinate3"><h4>By Others : {byvacdata.others}</h4></div>
            </div>
            <div className="btn-success"><h2>Record By Today</h2></div>
            <div className="row3">
                <div className="column3 columnvaccinate"><h4>By Today Male : {byvacdata.today_male}</h4></div>
                <div className="column3 columnvaccinate"><h4>By Today Female : {byvacdata.today_female}</h4></div>
                <div className="column3 columnvaccinate"><h4>By Today Others : {byvacdata.today_others}</h4></div>
            </div>
            <div className="btn-success"><h2>Record By Type of Vaccines</h2></div>
            <div className="row3">
                <div className="column3 columnvaccinate3"><h4>By AEFI : {byvacdata.aefi}</h4></div>
                <div className="column3 columnvaccinate3"><h4>By Covaxin : {byvacdata.covaxin}</h4></div>
                <div className="column3 columnvaccinate3"><h4>By Covishield : {byvacdata.covishield}</h4></div>
            </div>
            <div className="btn-success"><h2>Record By Today Type of Vaccines</h2></div>
            <div className="row3">
                <div className="column3 columnvaccinate"><h4>By Today AEFI : {byvacdata.today_aefi}</h4></div>
                <div className="column3 columnvaccinate"><h4>By Today First Dose : {byvacdata.today_dose_one}</h4></div>
                <div className="column3 columnvaccinate"><h4>By Today Second Dose : {byvacdata.today_dose_two}</h4></div>
            </div>
            <div className="btn-success"><h2>Record By Age</h2></div>
            <div className="rowhome">
                <div className="columnhome columnvaccinate3"><h4>Vaccinated by 18-30 age : {byvacagedata.vac_18_30}</h4></div>
                <div className="columnhome columnvaccinate3"><h4>Vaccinated by 30-45 age  : {byvacagedata.vac_30_45}</h4></div>
                <div className="columnhome columnvaccinate3"><h4>Vaccinated by 45-60 age  : {byvacagedata.vac_45_60}</h4></div>
                <div className="columnhome columnvaccinate3"><h4>Vaccinated by above 60 age  : {byvacagedata.above_60}</h4></div>
            </div>
            <div className="btn-success"><h2>State Wise Vaccinated</h2></div>
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

export default Vaccinate;