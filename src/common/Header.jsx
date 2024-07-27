import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="header">
        <h1 className="logo">Saravjot.</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
