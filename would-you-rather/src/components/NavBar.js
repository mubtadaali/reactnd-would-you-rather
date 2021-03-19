import React from "react";
import {NavLink} from "react-router-dom";
import {logout} from "../actions/authentication";
import {connect} from "react-redux";

const NavBar = ({user, logout}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-light pl-10">
            <NavLink to="/" className="navbar-brand" activeClassName="active">Would You Rather</NavLink>

            <div className="collapse navbar-collapse pl-10" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/add" className="nav-link">New Question</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/leaderboard" className="nav-link">Leader Board</NavLink>
                    </li>
                </ul>
            </div>
            <div className="pr-30">
                <span className="white-color pr-30"> Hello, {user.name}</span>
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={() => logout()}>
                    Logout
                </button>
            </div>
        </nav>
    )
};



export default connect(null, { logout })(NavBar);
