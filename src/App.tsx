import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, NavLink} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {internalUrls} from "./Infos/urls";
import {pages} from "./Infos/pages";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import {projects} from "./Infos/projects";
import {IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoMenu, IoClose} from "react-icons/io5";

function App() {
    const openMenu = () => {
        if (window.matchMedia('(max-device-width: 500px)').matches) {
            // @ts-ignore
            document.getElementById("menu-open").style.display = "none";
            // @ts-ignore
            document.getElementById("menu-close").style.display = "block";
            // @ts-ignore
            document.getElementById("menu").style.display = "flex";
            // @ts-ignore
            document.getElementById("footer").style.display = "flex";
        }
    }

    const closeMenu =() => {
        if (window.matchMedia('(max-device-width: 500px)').matches) {
            // @ts-ignore
            document.getElementById("menu-open").style.display = "block";
            // @ts-ignore
            document.getElementById("menu-close").style.display = "none";
            // @ts-ignore
            document.getElementById("menu").style.display = "none";
            // @ts-ignore
            document.getElementById("footer").style.display = "none";
        }
    }

  return (
      <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
              <div id="menu-open" onClick={openMenu}><IoMenu /></div>
              <div id="menu-close" onClick={closeMenu}><IoClose /></div>
              <div id="menu">
                  {
                      pages.map(page => {
                          return <div className="links">
                              {
                                  page.link
                                      ? <NavLink to={page.link} onClick={closeMenu}>{page.name}</NavLink>
                                      : <span>{page.name}</span>
                              }
                              {
                                  page.subpages &&
                                  <div className="submenu">
                                      {
                                          page.subpages.map(subpage => {
                                              return <NavLink to={subpage.link} onClick={closeMenu}>{subpage.name}</NavLink>
                                          })
                                      }
                                  </div>
                              }
                          </div>
                      })
                  }
              </div>
              <Routes>
                  <Route path={internalUrls.home()} element={<Home />} />
                  <Route path={internalUrls.about()} element={<About />} />
                  <Route path={internalUrls.projects()} element={<Projects />} />
                  {
                      projects.map(project => <Route path={project.details} element={<Project codename={project.codename} />} />)
                  }
                  <Route path="*" element={<Navigate to={internalUrls.home()} />} />
              </Routes>
              <div id="footer">
                  <div id="social">
                      <a href={"https://www.linkedin.com/in/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
                      <a href={"https://www.instagram.com/4lexcorrei4/"} target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a>
                  </div>
                  <div id="copyright">&copy; {new Date().getFullYear()} Alexandre Correia</div>
              </div>
          </div>
      </Router>
  );
}

export default App;
