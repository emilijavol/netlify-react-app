import "./App.css";
import { useState } from "react";

import Content from "./components/Content";
import WorkExperience from "./components/WorkExperience";
import Pill from "./components/Pill";
import FooterBlocks from "./components/Footer";
import github from "./images/211904_social_github_icon.png";

import email from "./images/134146_mail_email_icon.png";
import linkedin from "./images/104493_linkedin_icon.png";
import data from "./data.json";

function App() {
  const [lang, setLang] = useState("en");
  const {
    badge,
    aboutMe,
    education,
    personalSkills,
    technicalSkills,
    workExp,
    footer,
  } = data[lang];
  return (
    <div className="App">
      <div className="GreenBlock"></div>

      <header className="Header">
        <h1 className="Header-h1">{badge.badgeName}</h1>
        <h2 className="Header-h2">{badge.profession}</h2>
      </header>
      <button className="Button" onClick={() => setLang("en")}>
        EN
      </button>
      <button className="Button" onClick={() => setLang("lt")}>
        LT
      </button>
      <section>
        <div className="AboutMe-Links">
          <Content className="Left-block" title={aboutMe.links}>
            <ul className="links">
              <li>
                <a href="https://github.com/emilijavol" className="Soc-link ">
                  <img src={github} alt="github-logo" width="30" height="30" />
                  GITHUB
                </a>
              </li>
              <li>
                <a href="mailto:emilijavol@gmail.com" className="Soc-link ">
                  <img src={email} alt="mail-logo" width="30" height="30" />
                  EMAIL
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/emilija-volosevi%C4%8Di%C5%ABt%C4%97-433a73258/"
                  className="Soc-link "
                >
                  <img
                    src={linkedin}
                    alt="linkedin-logo"
                    width="30"
                    height="30"
                  />
                  LINKEDIN
                </a>
              </li>
            </ul>
          </Content>
          <Content className="Right-block" title={aboutMe.about}>
            <p className="Paragraph">{aboutMe.infoAboutMe}</p>
          </Content>
        </div>
      </section>

      <section>
        <div className="Education">
          <Content title={education.title}>
            <p className="text">{education.schoolThree}</p>
            <p className="text">2022-2023</p>
            <p className="text">{education.FrontEnd}</p>
            <div className="Hr"></div>
            <p className="text">{education.schoolOne}</p>
            <p className="text">2019-2021</p>
            <p className="text">{education.educationLevel}</p>
            <div className="Hr"></div>
            <p className="text">{education.schoolTwo}</p>
            <p className="text">2016-2019</p>
            <p className="text">{education.educationSecondLevel}</p>
          </Content>

          <Content title={personalSkills.titleSkills}>
            <Pill className="skill-one">{personalSkills.firstSkill}</Pill>
            <Pill className="skill-one">{personalSkills.secondSkill}</Pill>
            <Pill className="skill-one">{personalSkills.thirdSkill}</Pill>
          </Content>

          <Content title={technicalSkills.technicalTitle}>
            <Pill className="skill-one">HTML</Pill>
            <Pill className="skill-one">CSS</Pill>
            <Pill className="skill-one">JAVASCRIPT</Pill>
            <Pill className="skill-one">NODE.JS</Pill>
            <Pill className="skill-one">REACT.JS</Pill>
          </Content>
        </div>
      </section>

      <section>
        <Content title={workExp.workExperience}>
          <div className="WorkExperience-FlexBox">
            <WorkExperience position={workExp.positionOne}>
              {workExp.descriptionOne}
            </WorkExperience>
            <WorkExperience position={workExp.positionTwo}>
              {workExp.descriptionTwo}
            </WorkExperience>
            <WorkExperience position={workExp.positionThree}>
              {workExp.descriptionThree}
            </WorkExperience>
          </div>
        </Content>
      </section>

      <footer className="Footer">
        <FooterBlocks title={footer.adress}>
          {footer.street}
          <br />
          {footer.country}
        </FooterBlocks>
        <FooterBlocks title={footer.contacts}>
          <a href="emilijavol@gmail.com" className="Soc-link ">
            emilijavol@gmail.com
          </a>
          <br />
          <a href="tel:+37067055099" className="Soc-link ">
            +37067055099
          </a>
        </FooterBlocks>
        <FooterBlocks title={footer.socials}>
          <a
            href="https://www.linkedin.com/in/emilija-volosevi%C4%8Di%C5%ABt%C4%97-433a73258/"
            target="_blank"
            rel="noreferrer"
            className="Soc-link "
          >
            Linkedin
          </a>
        </FooterBlocks>
      </footer>
    </div>
  );
}

export default App;
