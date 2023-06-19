import React, { useState } from "react";
import { ServiceTimes, Location, About, EventsPreview, Connect } from "../info";
import { FooterTabItem, FooterTabContent } from ".";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("service_times");

  // const openTab = (evt, tabName) => {
  //   var i, x, tablinks;
  //   x = document.getElementsByClassName("content-tab");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByClassName("tab");
  //   for (i = 0; i < x.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  //   }
  //   document.getElementById(tabName).style.display = "block";
  //   evt.currentTarget.className += " is-active";
  // };
  return (
    <>
      <section className="hero is-primary is-fullheight">
        {/* Hero Head */}
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="https://gist.github.com/sllozier/b9d6597945d50f21c9d37d5ee4853a0c/raw/844988c92df9973f42cab1c244928c7b05c38a2d/DW_logo.png"
                    alt="Logo"
                  />
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end has-text-light">
                  <a className="navbar-item" href="/">
                    Home
                  </a>
                  <a className="navbar-item" href="/blog">
                    Blog
                  </a>
                  <a className="navbar-item" href="/give">
                    Give
                  </a>
                  <a className="navbar-item" href="/login">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* Hero Content */}
        <div className="hero-body ">
          <div className="container has-text-centered ">
            <p className="title is-family-secondary is-size-1 has-text-weight-light has-text-light">
              Welcome
            </p>
            <p>{}</p>
            <p className="subtitle is-family-primary is-size-2 has-text-info">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(200)
                    .pauseFor(2500)
                    .typeString("Do Church")
                    .pauseFor(3000)
                    .typeString(" Differently.")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </p>
          </div>
        </div>
        {/* Hero Footer */}
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container has-text-light">
              <ul>
                <FooterTabItem
                  title="Service Times"
                  id="service_times"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />

                <FooterTabItem
                  title="Location"
                  id="location"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <FooterTabItem
                  title="About"
                  id="about"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <FooterTabItem
                  title="Events"
                  id="events_preview"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <FooterTabItem
                  title="Connect"
                  id="connect"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <div className="container section">
        <FooterTabContent id="service_times" activeTab={activeTab}>
          <ServiceTimes />
        </FooterTabContent>
        <FooterTabContent id="location" activeTab={activeTab}>
          <Location />
        </FooterTabContent>
        <FooterTabContent id="about" activeTab={activeTab}>
          <About />
        </FooterTabContent>
        <FooterTabContent id="events_preview" activeTab={activeTab}>
          <EventsPreview />
        </FooterTabContent>
        <FooterTabContent id="connect" activeTab={activeTab}>
          <Connect />
        </FooterTabContent>
      </div>
    </>
  );
};
export default Hero;
