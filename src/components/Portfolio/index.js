import React from "react";
import eyeicon from "../../img/eyeicon.png";
import githublogo from "../../img/githublogo.png";
import codirectory from "../../img/codirectory.png";
import budgettracker from "../../img/budget.png";
import fitnessdash from "../../img/fitnessdash.png";
import dogwalker from "../../img/dogwalker.png";
import mytechblog from "../../img/mytechblog.png";
import ecommerce from "../../img/ecommerce.png";
import employeetracker from "../../img/employeetracker.png";
import genreadme from "../../img/genreadme.png";
import notetaker from "../../img/notetaker.png";
import teamprofilegen from "../../img/teamprofilegen.png";
import lyrichord from "../../img/overall.PNG";
import weatherdashboard from "../../img/weatherdash.png";
import dayplanner from "../../img/plannerheader.png";
import pwgen from "../../img/passwordgen.png";
import horiseon from "../../img/horiseon.png";

function Portfolio() {
    return (
        <div className="container-fluid">
            <br />
            <br />
            <br />
            <br />
            <div className="jumbotron">
                Portfolio
            </div>
            <br />
            <br />
            <br />
            <h5>
                Provided below are examples of freelance and assignment work, which demonstrates personal stylistic progression toward becoming an experienced web developer. Browse the gallery to see a range of projects focused on exercising design skills, while constructing the smoothest possible accessibility for users with semantic HTML and CSS languages.
                <br />
                <br />
                Selecting the  <a href="https://github.com/jarretebarnett" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 16 }} alt=""></img></a>  icon will guide you directly to the appropriate respository or the respective deployed application.
            </h5>
            <br />
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={codirectory} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://jarretebarnett.github.io/directory" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Company Directory</a>
                            <br />
                            <br />
                            <p className="card-text">Using React, this application is a company directory that enables users to search through a roster of employees by matching name input in the search bar.</p>
                            <a href="https://github.com/jarretebarnett/directory" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={budgettracker} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://trackbudgetoffline.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Budget Tracker</a>
                            <br />
                            <br />
                            <p className="card-text">The application is a standard budget tracker with an added feature of functioning offline.</p>
                            <a href="https://github.com/jarretebarnett/budgettracker" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={fitnessdash} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://wellnesstracker.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Fitness Tracker</a>
                            <br />
                            <br />
                            <p className="card-text">An application which utilizes a Mongo database with Mongoose schema in order to chart and graph user records of workouts to visualize the progress of their gym routines.</p>
                            <a href="https://github.com/jarretebarnett/fitnesstracker" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={dogwalker} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://dogwalkerapp.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Dog Walker Application</a>
                            <br />
                            <br />
                            <p className="card-text">Additional information about my skillset, objectives and whereabouts.</p>
                            <a href="https://github.com/jarretebarnett/dogwalker" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={mytechblog} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://techblogmvc.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> myTechBlog!</a>
                            <br />
                            <br />
                            <p className="card-text">An MVC, CMS-style blog site that features the ability to create accounts and post subjective forum material from users.</p>
                            <a href="https://github.com/jarretebarnett/MVCtechblog" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={ecommerce} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://github.com/jarretebarnett/ecommerceSQL" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> E-Commerce SQL Application</a>
                            <br />
                            <br />
                            <p className="card-text">A back-end application supported by MySQL and Insomnia Core. Use GET, POST, PUT and DELETE requests from a database of available products.</p>
                            <a href="https://github.com/jarretebarnett/ecommerceSQL" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={employeetracker} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://github.com/jarretebarnett/employeetracker" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Employee Roster Tracker</a>
                            <br />
                            <br />
                            <p className="card-text">This application acts as a user interface for a database which catalogs a company's personnel, postions and departments for recordkeeping.</p>
                            <a href="https://github.com/jarretebarnett/employeetracker" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={genreadme} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://github.com/jarretebarnett/genreadme" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> README.md Generator</a>
                            <br />
                            <br />
                            <p className="card-text">This project is a back-end JavaScript application that combines inquirer prompts and writeFile method to create a professionally gratifying README file for users.</p>
                            <a href="https://github.com/jarretebarnett/genreadme" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={notetaker} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://backendnotetaker.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Note Taker</a>
                            <br />
                            <br />
                            <p className="card-text">This application uses a back-end server to store user input as personal notes for users to recall, edit, or delete.</p>
                            <a href="https://github.com/jarretebarnett/notetaker" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={teamprofilegen} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://jarretebarnett.github.io/teamprofilegen/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Team Profile Generator</a>
                            <br />
                            <br />
                            <p className="card-text">This application consists of back-end JavaScript, which prompts user for information regarding their development team in order to generate the input into a working HTML page.</p>
                            <a href="https://github.com/jarretebarnett/teamprofilegen" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={lyrichord} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://seanmonaghan.github.io/LyriChord/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> LyriChord</a>
                            <br />
                            <br />
                            <p className="card-text">An application project which utilizes 2-3 API functions to deliver musical amusement for users.</p>
                            <a href="https://github.com/jarretebarnett/LyriChord" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={weatherdashboard} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://jarretebarnett.github.io/weatherdashboard/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Weather Dashboard</a>
                            <br />
                            <br />
                            <p className="card-text">An application project which utilizes 2-3 API functions to deliver musical amusement for users.</p>
                            <a href="https://github.com/jarretebarnett/weatherdashboard" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={dayplanner} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://jarretebarnett.github.io/workdayplanner/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Work Day Planner</a>
                            <br />
                            <br />
                            <p className="card-text">Users organize their day by saving tasks to designated time blocks, utilizing Moment.js.</p>
                            <a href="https://github.com/jarretebarnett/workdayplanner" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={pwgen} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://jarretebarnett.github.io/pwgen/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Password Generator</a>
                            <br />
                            <br />
                            <p className="card-text">A series of prompts verifies a criteria for randomizing a password for users.</p>
                            <a href="https://github.com/jarretebarnett/pwgen" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3" style={{ maxWidth: 350 }}>
                        <img src={horiseon} className="card-img-top" alt=""></img>
                        <div className="card-body">
                            <br />
                            <a href="https://jarretebarnett.github.io/horiseon/" rel="noreferrer" target="_blank" className="btn btn-dark"><img src={eyeicon} style={{ maxWidth: 11 }} alt=""></img> Horiseon</a>
                            <br />
                            <br />
                            <p className="card-text">A working mock site for a search engine optimization firm.</p>
                            <a href="https://github.com/jarretebarnett/horiseon" rel="noreferrer" target="_blank"><img src={githublogo} style={{ maxWidth: 22 }} alt=""></img></a>
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

export default Portfolio;