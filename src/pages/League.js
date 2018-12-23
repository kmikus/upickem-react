import React from 'react';
import '../App.css';
import { Header } from './Template';

const LeaguePage = (props) => (
    <div>
        <Header />
        <div style={{ paddingTop: '8vh' }} className="container">
            <h2 style={{ marginBottom: '3%' }}>League - 123456</h2>
            <hr />
            <div className="row">

                <div className="col-8">
                    <Picks />
                </div>
                <div className="col">
                    <Standings />
                </div>

            </div>
        </div>
    </div>
);

const Picks = (props) => {

    return (
        <div id="picks">
            <h5>Picks</h5>
            <form>
                <table style={{ textAlign: 'left' }} className="table table-sm table-hover table-bordered">

                    <thead className="thead-light">
                        <tr>
                            <th>Home</th>
                            <th></th>
                            <th>Away</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <PickRow />
                        <PickRow />
                        <PickRow />
                        <PickRow />
                        <PickRow />

                    </tbody>

                </table>

                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
}

const PickRow = (props) => {
    return (
        <tr>
            <td>PIT</td>
            <td style={{textAlign: 'center'}}><input type="radio" /></td>
            <td>BAL</td>
            <td style={{textAlign: 'center'}}><input type="radio" /></td>
        </tr>
    );
}

const Standings = (props) => {

    const standingsStyle = {
        border: "2px solid black",
        minHeight: "50vh",
        width: "100%"
    };

    return (
        <div style={standingsStyle} id="standings">
            <h5>Standings</h5>
        </div>
    );
};

export default LeaguePage;