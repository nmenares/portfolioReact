import React from "react";
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup } from "semantic-ui-react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui grid middle aligned boxNavbar">
        <div className="row navbar">
          <div className="one wide column"></div>
          <div className="seven wide column">Nataly Menares</div>
          <div className="seven wide column right aligned linkIcons">
            <a
              href="https://github.com/nmenares"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/nmenares/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="/resume.pdf" download>
              <Popup
                content="Download Resume"
                position="bottom right"
                trigger={
                  <FontAwesomeIcon icon={["fas", "arrow-circle-down"]} />
                }
              />
            </a>
          </div>
          <div className="one wide column"></div>
        </div>
        <div className="row menu background-light text-dark">
          <div className="two wide column"/>
          <div className="twelve wide column center aligned"><Link to="/career">Software Engineer</Link></div>
          <div className="two wide column center aligned"><Link to="/more">More...</Link></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
