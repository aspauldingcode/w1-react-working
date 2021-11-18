import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <h3 className="navbar-text">Welcome to brokenweb's totally functional homepage on the internetz!</h3>
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="/lol.html">Content</a>
                            <a className="nav-link" href="https://github.com/aspauldingcode">GitHub</a>
                        </div>
                </div>
            </nav>
        );
    }
}