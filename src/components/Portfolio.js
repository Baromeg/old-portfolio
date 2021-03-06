import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faPython, faReact, faNodeJs, faGitSquare, faGithub, faHtml5, faSass, faChrome, faCss3 } from '@fortawesome/free-brands-svg-icons'
import Mockup from './Mockup'
import babel from '../styles/Babel.png'
import bulma from '../styles/bulma.png'
import responsive from '../styles/responsive-design.png'
import mongodb from '../styles/mongodb.png'
import jwt from '../styles/jwt.png'
import flask from '../styles/flask.png'
import postgresql from '../styles/postgresql.png'
import marshmallow from '../styles/marshmallow.png'
import express from '../styles/Express-JS-min.png'
import webpack from '../styles/webpack.png'
import vscode from '../styles/vscode.png'
import heroku from '../styles/heroku.png'
import flexbox from '../styles/flexbox.png'
import material from '../styles/material.png'
import d3 from '../styles/d3.png'
import knowyourheritage from '../styles/knowyourheritage.png'
import greenworld from '../styles/greenworld.png'
import heroes from '../styles/heroes.png'
import frogger from "../styles/ezgif.com-gif-maker.gif"
import restapi from '../styles/rest-api.png'
import mapbox from '../styles/mapbox.png'
import cloudinary from '../styles/cloudinary.png'

const Portfolio = (props) => {


  return <div >
    <section className="hero is-fullheight-with-navbar is-primary ">
      <div className="hero-body">
        <div className="container is-fullhd">
          <div className="section title has-text-link is-family-code">
            Know your Heritage
          </div>

          <div className="columns">
            <div className="column is-8">
              <Mockup
                src={knowyourheritage}
              ></Mockup>
            </div>
            <div className="column is-4">
              <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child is-vertical">
                    <div className="columns is-mobile">
                      <div className="column has-text-centered">
                        <a target='_blank' rel='noreferrer' href="https://knowyourheritage.herokuapp.com/">
                          <FontAwesomeIcon icon={faChrome} color='#30475e' size='3x' />
                        </a>
                      </div>
                      <div className="column has-text-centered">
                        <a target='_blank' rel='noreferrer' href="https://github.com/Baromeg/project-4"><FontAwesomeIcon icon={faGithub} color='#30475e' size='3x' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-child is-vertical">
                    <div className="content 
                    has-text-link is-size-6 has-text-left">
                      <p>The application showcases the wonders of the UNESCO’s World Heritage List to promote its awareness.</p>
                      <p>Using Python I computed the data from several API’s requests (UNESCO list + Google Places & Photos) and built the componentry for the UI.
                      </p>
                      <p>The app has email verification using SendGrid, a map feature using Mapbox and an image carousel using ImageGallery.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <nav className="level is-mobile ">

            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio is-hidden-touch	" src={responsive} alt="responsive-design" />
                {/* <p className="title is-7">responsive-design</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faJsSquare} color='#f05454' size='3x' />
                {/* <p className="title is-7">JavaScript</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faReact} color='#f05454' size='3x' />
                {/* <p className="title is-7">React.Js</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faPython} color='#f05454' size='3x' />
                {/* <p className="title is-7">Python</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={flask} alt="flask" />
                {/* <p className="title is-7">Flask</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={postgresql} alt="PostgresDB" />
                {/* <p className="title is-7">PostgresDB</p> */}
              </div>
            </div>

            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={marshmallow} alt="marshmallow" />
                {/* <p className="title is-7">marshmallow</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <FontAwesomeIcon icon={faNodeJs} color='#f05454' size='3x' />
                {/* <p className="title is-7">Node.js</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={babel} />
                {/* <p className="title is-7">babel</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={webpack} alt="webpack" />
                {/* <p className="title is-7">webpack</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={heroku} alt="heroku" />
                {/* <p className="title is-7">heroku</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={restapi} alt="rest-api" />
                {/* <p className="title is-7">bulma</p> */}
              </div>
            </div>
          </nav>

        </div>
      </div>
    </section>

    <section className="hero is-fullheight-with-navbar is-link ">
      <div className="hero-body">
        <div className="container is-fullhd hero-work">
          <div className="section title has-text-primary is-family-code">
            GreenWorld
          </div>
          <div className="columns">
            <div className="column is-8">
              <Mockup
                src={greenworld}
              ></Mockup>
            </div>
            <div className="column is-4">
              <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child is-vertical">
                    <div className="columns is-mobile">
                      <div className="column has-text-centered">
                        <a target='_blank' rel='noreferrer' href="https://greenworld-p3.herokuapp.com/">
                          <FontAwesomeIcon icon={faChrome} color='#e8e8e8' size='3x' />
                        </a>
                      </div>
                      <div className="column has-text-centered">
                        <a target='_blank' rel='noreferrer' href="https://github.com/Baromeg/project-3"><FontAwesomeIcon icon={faGithub} color='#e8e8e8' size='3x' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-child is-vertical">
                    <div className="content has-text-primary is-size-6 has-text-left">
                      <p>The application helps the user make greener decisions by discovering sustainable business and communities locally.</p>
                      <p>I built the "Single location" page and enriched the UX with the map tile using MapBox, the comments and ratings using React-Ratings, the photo upload feature using Cloudinary.</p>
                      <p>It handles async requests (Yelp, Mapbox) with error handling triggers and geolocation for best UX.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="level is-mobile">
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={responsive} alt="responsive-design" />
                {/* <p className="title is-7">responsive-design</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faJsSquare} color='#f05454' size='3x' />
                {/* <p className="title is-7">JavaScript</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faReact} color='#f05454' size='3x' />
                {/* <p className="title is-7">React.Js</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={mongodb} alt="mongodb" />
                {/* <p className="title is-7">mongodb</p> */}
              </div>
            </div>

            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faNodeJs} color='#f05454' size='3x' />
                {/* <p className="title is-7">Node.js</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={babel} alt="babel" />
                {/* <p className="title is-7">babel</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={webpack} alt="webpack" />
                {/* <p className="title is-7">webpack</p> */}
              </div>
            </div>

            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={heroku} alt="heroku" />
                {/* <p className="title is-7">heroku</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={restapi} alt="rest-api" />
                {/* <p className="title is-7">bulma</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={mapbox} alt="mapbox" />
                {/* <p className="title is-7">mapbox</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch">
              <div>
                <img className="image is-48x48 icons-portfolio 	" src={cloudinary} alt="cloudinary" />
                {/* <p className="title is-7">cloudinary</p> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <section className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body">
        <div className="container is-fullhd hero-work">
          <div className="section title has-text-link is-family-code">
            Heroes
          </div>
          <div className="columns">
            <div className="column is-8">
              <Mockup
                src={heroes}
              >
              </Mockup>
            </div>
            <div className="column is-4">
              <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child ">
                    <div className="columns is-mobile ">
                      <div className="column has-text-centered ">
                        <a target='_blank' rel='noreferrer' href="https://baromeg.github.io/project-2">
                          <FontAwesomeIcon icon={faChrome} color='#30475e' size='3x' />

                        </a>
                      </div>
                      <div className="column has-text-centered">
                        <a target='_blank' rel='noreferrer' href="https://github.com/Baromeg/project-2"><FontAwesomeIcon icon={faGithub} color='#30475e' size='3x' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-child is-vertical">
                    <div className="content has-text-link is-size-6 has-text-left">
                      <p>The application features all-time comic heroes.
                      </p>
                      <p>
                        Pair programming throughout the project fetching several API’s (SuperHero & ComicVine) to link each hero with its first comic appearance as well as the entire UI.

                      </p>
                      <p>I enhanced the UX by implementing the image carousel on the home page using react-carousel library.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <nav className="level is-mobile">
            <div className="level-item has-text-centered is-hidden-touch">
              <div>
                <img className="image is-48x48 icons-portfolio" src={responsive} alt="responsive-design" />
                {/* <p className="title is-7">responsive-design</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faJsSquare} color='#f05454' size='3x' />
                {/* <p className="title is-7">JavaScript</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faReact} color='#f05454' size='3x' />
                {/* <p className="title is-7">React.Js</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={restapi} alt="rest-api" />
                {/* <p className="title is-7">rest-api</p> */}
              </div>
            </div>

            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faNodeJs} color='#f05454' size='3x' />
                {/* <p className="title is-7">Node.js</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={babel} alt="babel" />
                {/* <p className="title is-7">babel</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={webpack} alt="webpack" />
                {/* <p className="title is-7">webpack</p> */}
              </div>
            </div>

            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <FontAwesomeIcon icon={faGithub} color='#f05454' size='3x' />
                {/* <p className="title is-7">github</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered is-hidden-touch	">
              <div>
                <img className="image is-48x48 icons-portfolio" src={bulma} alt="bulma" />
                {/* <p className="title is-7">bulma</p> */}
              </div>
            </div>

          </nav>


        </div>
      </div>
    </section>
    <section className="hero is-fullheight-with-navbar is-link">


      <div className="hero-body">
        <div className="container is-fullhd hero-work">
          <div className="section title has-text-primary is-family-code">
            The Frogger
          </div>


          <div className="columns">
            <div className="column is-8">
              <Mockup
                src={frogger}
              ></Mockup>
              {/* <img src="../styles/frogger.png" alt="frogger screenshot" /> */}
            </div>
            <div className="column is-4">
              <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child is-vertical">
                    <div className="columns is-mobile">
                      <div className="column has-text-centered">
                        <a target='_blank' rel='noreferrer' href="https://baromeg.github.io/project-1">
                          <FontAwesomeIcon icon={faChrome} color='#e8e8e8' size='3x' />
                        </a>
                      </div>
                      <div className="column has-text-centered">
                        <a target='_blank' rel='noreferrer' href="https://github.com/Baromeg/project-1"><FontAwesomeIcon icon={faGithub} color='#e8e8e8' size='3x' />
                        </a>
                      </div>
                    </div>
                    <div className="tile is-child is-vertical">
                      <div className="content has-text-primary is-size-6 has-text-left">
                        <p>It was my first independently made application. It is a grid-based game where I implemented the concepts learned on CSS, JavaScript, logical thinking and problem-solving. </p>
                        <p>The game handles moving obstacles and tracks the player's scoring.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="level is-mobile">

            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faJsSquare} color='#f05454' size='3x' />
                {/* <p className="title is-7">JavaScript</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faHtml5} color='#f05454' size='3x' />
                {/* <p className="title is-7">HTML5</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faCss3} color='#f05454' size='3x' />
                {/* <p className="title is-7">CSS3</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <img className="image is-48x48 icons-portfolio" src={flexbox} alt="flexbox" />
                {/* <p className="title is-7">bulma</p> */}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faNodeJs} color='#f05454' size='3x' />
                {/* <p className="title is-7">Node.js</p> */}
              </div>
            </div>


            <div className="level-item has-text-centered">
              <div>
                <FontAwesomeIcon icon={faGithub} color='#f05454' size='3x' />
                {/* <p className="title is-7">github</p> */}
              </div>
            </div>


          </nav>

        </div>


      </div>
    </section>
  </div>

}

export default Portfolio


