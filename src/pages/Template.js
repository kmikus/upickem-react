import React from 'react';
import '../App.css';

// const Body = (props) => (
//     <div style={{ paddingTop: '7%' }} className="container">
//       <h2 style={{ marginBottom: '3%' }}>{props.heading}</h2>
//       <hr />
//       <div className="row">
//         <div className="col">
//           {props.content}
//         </div>
//       </div>
//     </div>
// )

const Header = (props) => (
    <div>
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">uPickEm</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/league">League <span className="sr-only">(current)</span></a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Logout</a>
                    </li>
                </ul>

            </div>
        </nav>
    </div>
);

const Sidebar = (props) => {
    const sidebarStyle = {
        borderLeft: "1px solid #BDBDBD",
        marginTop: "4%",
        marginLeft: "10%",
        height: "100%",
        width: "20%",
        float: "right",
        position: "sticky"
    }

    return (
        <div style={sidebarStyle}>
            <h3>Scores</h3>
            <div>
                <div style={{ textAlign: "left" }} className="row">
                    <div className="col">
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                        <ScoreCell homeTeam="BAL" awayTeam="PIT" homeScore="0" awayScore="100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ScoreCell = (props) => {
    return (
        <div style={{ margin: '4%', borderBottom: '1px solid #BDBDBD' }}>
            <p>{props.homeTeam}<span style={{ float: "right" }}>{props.homeScore}</span></p>
            <p>{props.awayTeam}<span style={{ float: "right" }}>{props.awayScore}</span></p>
        </div>
    );
}

export { Header, Sidebar };