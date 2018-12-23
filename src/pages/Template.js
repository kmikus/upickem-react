import React from 'react';
import '../App.css';

const Header = (props) => (
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <a class="navbar-brand" href="/home">uPickEm</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Logout</a>
                    </li>
                </ul>

            </div>
        </nav>
    </div>
);

const Sidebar = (props) => (
    <div style={{ borderLeft: "5px solid black" }}>
        Hello
    </div>
);

export { Header, Sidebar };