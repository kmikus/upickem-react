import React from 'react';
import '../App.css';
import { Header, Sidebar } from './Template';

const HomePage = (props) => (
  <div>
    <Header />
    <div style={{ paddingTop: '7%' }} className="container">
      <h2 style={{ marginBottom: '3%' }}>Your Leagues</h2>
      <hr />
      <div className="row">
        <div className="col">
          <LeagueCard leagueName="Kevin's League" leagueId="12345" place="1"/>
          <LeagueCard leagueName="Kevin's League" leagueId="12345" place="1"/>
          <LeagueCard leagueName="Kevin's League" leagueId="12345" place="1"/>
          <LeagueCard leagueName="Kevin's League" leagueId="12345" place="1"/>
          <LeagueCard leagueName="Kevin's League" leagueId="12345" place="1"/>
        </div>
      </div>
    </div>
  </div>
);

const LeagueCard = (props) => {

  return (
    <div className="card" style={{ display: 'inline-block', margin: '2%', width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title card-link">{props.leagueName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">ID# {props.leagueId}</h6>
        <p className="card-text">Place - {props.place}</p>
        <button className="btn btn-link">View</button>
      </div>
    </div>
  );
}

export default HomePage;