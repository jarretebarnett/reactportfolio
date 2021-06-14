import React from "react";
import headshot from "../../img/headshot.JPG";
import github from "../../img/githublogo.png";
import linkedin from "../../img/LinkedIn.png";
import facebook from "../../img/Facebook.png";
import twitter from "../../img/Twitter.png";
import instagram from "../../img/Instagram.jpg";
import youtube from "../../img/YouTube.png";
import twitch from "../../img/Twitch.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import jquery from "../../img/jquery.png";
import reactjs from "../../img/react.png";
import node from "../../img/node.png";
import npm from "../../img/npm.png";
import nodemon from "../../img/nodemon.png";
import dotenv from "../../img/dotenv.png";
import socketio from "../../img/socketio.png";
import sql from "../../img/sql.png";
import api from "../../img/api.png";
import handlebars from "../../img/handlebarsjs.png";

function About() {
    return (
        <div className="container-fluid">
            <br />
            <br />
            <br />
            <br />
            <div className="jumbotron">
                Contact | About
            </div>
            <br />
            <br />
            <br />
            <div className="row">
                <div className="card mb-3" style={{ maxWidth: 350 }}>
                    <div className="row g-0">
                        <div className="col-12">
                            <div className="card-body">
                                <br />
                                <img src={headshot} class ="card-img-top" style={{ maxWidth: 300 }} alt=""></img>
                                <h5 className="card-title">
                                    <br />
                                    Bio
                                </h5>
                                <p className="card-title">
                                    My name is Jarreté Barnett, and I am a practicing Full-Stack Software Engineer. I began my study of web development as a Bootcamp enrollee through the University of Connecticut School of Engineering. Now understanding a formidable range of methods and languages since graduating, the objective is to fortify this skillset into intuitive design which translates efficient back-end behavior into concise, coordinated experiences for client-side users on the front-end which grants them a heightened threshold of control, execution and engagement.
                                    <br />
                                    <br />
                                    In a brief period of time, I have attained the appropriate knowledge to navigate inefficient and dysfunctional bugs, as well as exercise responsive design which cultivates optimal user feedback and interactivity. I am also a working licensed sales associate in real estate, and aspire to command this deft of developmental proficiency into a business-related real estate application for mass utilization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="card mb-3" style={{ maxWidth: 350 }}>
                    <div className="card-body">
                        <div className="row g-0">
                            <h5 className="card-title">
                                Proficiencies
                            </h5>
                            <br />
                            <div className="row-cols-auto">
                                <a href><img src={html} style={{ maxWidth: 33 }} alt=""></img></a>
                                <a href><img src={css} style={{ maxWidth: 34 }} alt=""></img></a>
                                <a href><img src={js} style={{ maxWidth: 45 }} alt=""></img></a>
                                <a href><img src={jquery} style={{ maxWidth: 52 }} alt=""></img></a>
                                <a href><img src={reactjs} style={{ maxWidth: 44 }} alt=""></img></a>
                                <a href><img src={node} style={{ maxWidth: 37 }} alt=""></img></a>
                                <a href><img src={npm} style={{ maxWidth: 54 }} alt=""></img></a>
                                <a href><img src={nodemon} style={{ maxWidth: 43 }} alt=""></img></a>
                                <a href><img src={dotenv} style={{ maxWidth: 41 }} alt=""></img></a>
                                <a href><img src={socketio} style={{ maxWidth: 40 }} alt=""></img></a>
                                <a href><img src={sql} style={{ maxWidth: 40 }} alt=""></img></a>
                                <a href><img src={api} style={{ maxWidth: 53 }} alt=""></img></a>
                                <a href><img src={handlebars} style={{ maxWidth: 46 }} alt=""></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="card mb-3" style={{ maxWidth: 350 }}>
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">
                                Contact
                            </h5>
                            <div className="row-cols-auto">
                            <a href="https://www.github.com/jarretebarnett/" rel="noreferrer" target="_blank"><img src={github} style={{ maxWidth: 33 }} alt=""></img></a>
                            <a href="https://www.linkedin.com/in/jarretebarnett/" rel="noreferrer" target="_blank"><img src={linkedin} style={{ maxWidth: 40 }} alt=""></img></a>
                            <a href="https://www.facebook.com/jarrete.y.barnett/" rel="noreferrer" target="_blank"><img src={facebook} style={{ maxWidth: 36 }} alt=""></img></a>
                            <a href="https://twitter.com/jarrete_barnett" rel="noreferrer" target="_blank"><img src={twitter} style={{ maxWidth: 38 }} alt=""></img></a>
                            <a href="https://www.instagram.com/jarretebarnett/" rel="noreferrer" target="_blank"><img src={instagram} style={{ maxWidth: 31 }} alt=""></img></a>
                            <a href="https://www.youtube.com/channel/UCrvMqVxDXQxNlDNoavSRh5g" rel="noreferrer" target="_blank"><img src={youtube} style={{ maxWidth: 50 }} alt=""></img></a>
                            <a href="https://www.twitch.tv/jaewhybe" rel="noreferrer" target="_blank"><img src={twitch} style={{ maxWidth: 31 }} alt=""></img></a>
                            </div>
                            <form onSubmit="mailto:jarretebarnett@gmail.com" id="form" method="POST" encType="multipart/form-data">
                                <div className="mb-3">
                                    <label for="emailInput" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="emailInput" placeholder="Your Email Address"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="messageInput" className="form-label">Message:</label>
                                    <textarea className="form-control" id="messageInput" rows="5"></textarea>
                                </div>
                                <a href className="btn btn-dark" id="submit">Submit</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}

export default About;