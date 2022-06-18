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
  SiRedux,
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
                  src="https://user-images.githubusercontent.com/94324872/171921832-7950e4de-01ca-4372-9881-b26bf55d6247.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>E-Commerce</h2>
              <p>
                E-Commerce web application were user can buy different product. It is a solo project and has most of the features of the shopping websites.
              </p>
              <div>
              <SiExpress />
                <SiMongodb />
              <FaReact />
                <SiNodedotjs />
                <SiRedux/>
                
              </div>
              <div>
                <a
                  href="https://e-commerce-alokkushwaha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    URL for the API
                  </span>
                </a>
                <a
                  href="https://github.com/Alok0818/E-Commerce-mern-website"
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
                  src="https://user-images.githubusercontent.com/94324872/172460267-93a6d763-a318-40b4-b3e8-748994eac684.png"
                  alt="Practo"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Practo</h2>
              <p>
              Practo is leading healthcare platform that connects patients with healthcare products and providers online.
              </p>
              <div>
              <SiExpress />
                <SiMongodb />
              <FaReact />
                <SiNodedotjs />
                <SiRedux/>
              </div>
              <div>
                <a
                  href="https://practo-pranavdalvi9.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/PranavDalvi9/PractoCloneReact"
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
                  src="https://user-images.githubusercontent.com/94324872/174451129-ba81dba4-2339-40ea-901f-db4e72bcee8d.png"
                  alt="Overstock"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Alex Store</h2>
              <p>
                A web application to where user can buy products, sort and filter, search and add the product to the cart .
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                {/* <SiNodedotjs /> */}
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://alex-store.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Alok0818/Alex-Store"
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
                  src="https://user-images.githubusercontent.com/94324872/174451638-eb29e1d3-de83-406e-af8a-5a168c94380a.png"
                  alt="To-Do-App"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>To-Do Application</h2>
              <p>
              To-Do Application, MERN project where a user can Create task. The user can Update, Edit, Delete and also change the status of task.
              </p>
              <div>
              <SiExpress />
                <SiMongodb />
              <FaReact />
                <SiNodedotjs />
                <SiRedux/>
              </div>
              <div>
                <a
                  href="https://to-do-app-alokkushwaha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Alok0818/To-Do-Application"
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
