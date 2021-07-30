import React from "react";
import resume from "../../docs/ResumeCert.pdf";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ opacity: 93 }}>
      <div className="container">
        <div className="row-cols-auto">
          <div className="navbar" id="navbarNav">
            <a className="navbar-brand" href="/reactportfolio">
              Jarreté Barnett
            </a>
            <a className="nav-link" href="/reactportfolio/#/portfolio">Portfolio</a>
            <a className="nav-link" href="/reactportfolio/#/contact">Contact | About</a>
            <a className="nav-link" href={resume} rel="noreferrer" target="_blank">Résumé</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;