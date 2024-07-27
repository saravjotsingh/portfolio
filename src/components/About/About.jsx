import Header from "../../common/Header";
import "./About.css";
import AvatarImage from "../../assets/img/avatar.png";
import ProfilePic from "../../assets/img/profile.jpeg";

export default function About() {
  return (
    <>
      <div className="container">
        <main className="main-content">
          <div className="main-content-1">
            <h3 className="hi-text">
              Hey, I'm Saravjot{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h3>
            <div className="title"><span className="title-color">Full</span>Stack</div>
            <div className="title"> Developer</div>
            <p className="description">
              I'm a full-stack developer based in Canada, I'll help you build
              robust and scalable web applications that your users will love.
            </p>
            <div className="buttons">
              <a href="mailto:saravjotpabla@gmail.com">
              <button  className="btn get-in-touch">Get In Touch</button></a>
            </div>
          </div>
          <div className="main-content-2">
              <div className="profile-pic">
                <img src={ProfilePic} alt="Luca" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
