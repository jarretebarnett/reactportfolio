import React from "react";
import eyeicon from "../../img/eyeicon.png";
import closeheadshot from "../../img/closeheadshot.png";
import resumecloseup from "../../img/resumecloseup.png";
import trekgambit from "../../img/trekgambit.png";
import resume from "../../docs/ResumeCert.pdf";

function Home() {
    return (
        <div className="container-fluid">
            <br />
            <br />
            <br />
            <br />
            <div className="jumbotron">
                Full-Stack Web Developer
            </div>
            <br />
            <br />
            <br />
            <h5>
                Welcome to my portfolio, which consists of developmental projects and exercises over the course of my studies and practices with Full-Stack Software Engineering. Work provided includes server-side JavaScript which envelops the behavior and characteristics of working user interfaces, as well as raw back-end handling of hard-coded data or prompted user input. Browse the site for direct links to applications, as well as contact information for professional inquiry.
            </h5>
            <br />
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={closeheadshot} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="/reactportfolio/#/contact" class="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Contact | About</a>
                            <br />
                            <br />
                            <p className="card-text">Additional information about my skillset, objectives and whereabouts.</p>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={trekgambit} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <br />
                            <a href="/reactportfolio/#/portfolio" class="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Portfolio</a>
                            <br />
                            <br />
                            <p className="card-text">Browse a gallery of working repositories and deployed applications.</p>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={resumecloseup} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <br />
                            <a href={resume} class="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Résumé</a>
                            <br />
                            <br />
                            <p className="card-text">View an updated résumé of work experience.</p>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}
  
export default Home;