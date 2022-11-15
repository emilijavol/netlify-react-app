import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <p className="pheader"></p>
        <div className="name-box">
          <h1 className="name">EMILIJA VOLOSEVIČIŪTĖ</h1>
          <h2 className="occupation">PROGRAMMER</h2>
        </div>
      </header>
      <main>
        <section className="grid-container">
          <div className="a">
            <h3 className="headers">ABOUT ME</h3>
            <div>
              <div className="hr1"></div>
              <div className="hr2"></div>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem laborum quam est consectetur atque itaque error
              numquam minima ipsam placeat, adipisci neque sunt non minus
              deleniti enim cupiditate accusantium! Ab.
            </p>
          </div>
          <div className="b">
            <h3 className="headers">LINKS</h3>
            <div>
              <div className="hr1"></div>
              <div className="hr2"></div>
            </div>
            <ul className="links">
              <li>
                {" "}
                <a href="https://twitter.com/">
                  <img
                    src="104501_twitter_bird_icon.png"
                    alt="twitter-logo"
                    width="30"
                    height="30"
                  />
                  TWITTER/username
                </a>
              </li>
              <li>
                <a href="https://github.com/griddb/griddb?gclid=CjwKCAjw7vuUBhBUEiwAEdu2pNK6J9GnjpnxstEIo9TX26M9id-wGgnY0DOJyeAiBpJJD7felG2yYxoCVH0QAvD_BwE">
                  <img
                    src="211904_social_github_icon.png"
                    alt="github-logo"
                    width="30"
                    height="30"
                  />
                  GITHUB/username
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/1/">
                  <img
                    src="134146_mail_email_icon.png"
                    alt="mail-logo"
                    width="30"
                    height="30"
                  />
                  EMAIL/emailadress
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <img
                    src="104493_linkedin_icon.png"
                    alt="linkedin-logo"
                    width="30"
                    height="30"
                  />
                  LINKEDIN/username
                </a>
              </li>
            </ul>
          </div>
          <div className="c">
            <h3 className="headers">EDUCATION</h3>
            <div>
              <div className="hr1"></div>
              <div className="hr2"></div>
            </div>
            <div>
              <p className="text">KAUNO KOLEGIJA</p>
              <p className="text">2019-2021</p>
              <p className="text">Profesinis bakalauras</p>
            </div>
            <div className="hr3"></div>
            <div>
              <p className="text">JUOZO BALČIKONIO GIMNAZIJA</p>
              <p className="text">2016-2019</p>
              <p className="text">Pagrindinis išsilavinimas</p>
            </div>
          </div>
          <div className="d">
            <h3 className="headers">TECHNICAL SKILLS</h3>
            <div>
              <div className="hr1"></div>
              <div className="hr2"></div>
            </div>
            <div className="colour">
              <h3 className="text">JAVASCRIPT</h3>
              <h3 className="text">NODE.JS</h3>
              <h3 className="text">REACT.JS</h3>
            </div>
          </div>
          <div className="e">
            <h3 className="headers">PERSONAL SKILLS</h3>
            <div className="hr1"></div>
            <div className="hr2"></div>
            <div className="colour">
              <h3 className="text">TEAMWORK</h3>
              <h3 className="text">COMMUNICATION</h3>
              <h3 className="text">ORGANIZATION</h3>
            </div>
          </div>
        </section>

        <section>
          <h3 className="headers">WORK EXPERIENCE</h3>
          <div className="hr1"></div>
          <div className="hr2"></div>
          <section className="grid-container2">
            <div className="f">
              <div className="text">
                <p>2021.07 - UAB "Pasoga", Mėsininkas</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, repudiandae repellat quo numquam sequi laboriosam
                  nam voluptatibus optio perferendis nobis delectus sint
                  voluptatum porro accusantium ad nesciunt doloribus aspernatur?
                  Sapiente.
                </p>
                <p>Lorem</p>
                <p>Ipsum</p>
              </div>
            </div>
            <div className="g">
              <div className="text">
                <p>2020.01-2021.06 - UAB "Lėvuo, Vyr. pardavėja konsultantė</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae quas, eligendi exercitationem pariatur fugiat
                  aperiam eius vel ratione iure labore nostrum quaerat?
                  Cupiditate mollitia dignissimos ullam commodi nemo, ad sunt.
                </p>
                <p>Lorem</p>
                <p>Ipsum</p>
              </div>
            </div>
            <div className="h">
              <div className="text">
                <p>2019.05 - 2019.09, UAB "Depo", Vyr. kasininkė</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  modi, obcaecati quisquam tempora ad perspiciatis maxime
                  commodi suscipit ut iure consectetur, deleniti a quo eaque
                  cumque pariatur cum quasi odio? deleniti consectetur ut.
                </p>
                <p>Lorem</p>
                <p>Ipsum</p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <div className="hr1"></div>
      <div className="hr2"></div>

      <footer className="grid-container3">
        <div className="m">
          <div className="footer">
            <h3 className="headers">LOCATION</h3>
            <p className="gms">Gatve 16-3</p>
            <p className="gms"> Miestas, šalis</p>
          </div>
        </div>
        <div className="n">
          <div className="footer">
            <h3 className="headers">CONTACT</h3>
            <p className="hover">
              <a href="https://mail.google.com/mail/u/1/">
                emilijavol@gmail.com
              </a>{" "}
            </p>
            <p className="hover">
              <a href="https://www.google.com/search?q=pjone&rlz=1C1CHBD_enLT813LT813&oq=pjone&aqs=chrome..69i57j0i271l3j69i60l4.727j0j4&sourceid=chrome&ie=UTF-8">
                +37067055099
              </a>
            </p>
          </div>
        </div>
        <div className="k">
          <div className="footer">
            <h3 className="headers">SOCIAL</h3>
            <p className="hover">
              <a href="https://twitter.com/">Twitter</a>
            </p>
            <p className="hover">
              <a href="https://www.linkedin.com/">Linkedin</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
