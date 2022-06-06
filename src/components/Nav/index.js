import React from "react";
import resume from "../../docs/Resume.pdf";
import certs from "../../docs/Certs.pdf";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ opacity: 93 }}>
      <div className="container">
        <div className="row-cols-auto">
          <div className="navbar" id="navbarNav">
            <a className="navbar-brand" href="/reactportfolio">
              Jarreté Barnett
            </a>
            <a className="nav-link" href="/reactportfolio/#/projects">Portfolio</a>
            <a className="nav-link" href="/reactportfolio/#/bio">Contact | About</a>
            <a className="nav-link" href={resume} rel="noreferrer" target="_blank">Resumé</a>
            <a className="nav-link" href={certs} rel="noreferrer" target="_blank">Certificates</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;