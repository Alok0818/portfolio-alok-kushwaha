import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/94324872/159179521-7b64d353-b169-4b71-b856-fd0300d6ff2f.png"
                  alt="Overstock"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Overstock Clone</h2>
              <p>
                A web application to buy household goods like furniture,
                decoration materials and many more. A collaborative project
                built by a team of 4, executed in 5 days.
              </p>
              <div>
                {/* <FaReact /> */}
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                {/* <SiNodedotjs /> */}
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://overstock-front-end-clone.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Alok0818/Overstock-front-End-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/94324872/159302172-1d3467d2-63e5-4d50-b6c6-d9b56ad1cfc3.png"
                  alt="Orbitz"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Orbitz Clone</h2>
              <p>
                A web application to book transport tickets, hotels very easily
                at an exclusive discount price. A collaborative project built by
                a team of 6, executed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                {/* <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://jovial-meitner-7c3368.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Alok0818/Orbitz-clone-unit-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://news-cdn.softpedia.com/images/news2/Dropbox-2-9-Enters-Development-with-Streaming-Sync-Feature-442773-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Backend API for Drive / DropBox Clone </h2>
              <p>
                Backend API for a google drive like app built using NodeJS,
                Express, Mongoose, MongoDB Atlas and AWS S3 for storage. A solo
                project. CRUD operations for users, files and folders.
              </p>
              <div>
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://drive-system.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    URL for the API
                  </span>
                </a>
                <a
                  href="https://github.com/imbickydutta/file-system-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/1bsxCjF/Screenshot-349.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Classic TicTacToe</h2>
              <p>
                Mini project of A classic TicTacToe game built using ReactJS. Features : Button for Resetting The Game, History of all the moves played (undo a move), etc.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://tictactoe-bicky.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/imbickydutta/tictactoe/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/PMny3hW/Screenshot-406.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Star Wars Search</h2>
              <p>
                Vanilla JS web app to Search for any Star Wars Character. Build with the help of Star Wars API and has the Classic UI (Color theme) of the original Star Wars Movie. Built to learn APIs and use them in the project.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://searchstarwars.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/imbickydutta/starWarsCharacterSearch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
