const {Link, IndexLink}           = require('react-router');
const React                       = require('react');

{/*
Navigation is a stateless functional component.
*/}
const Navigation = () => {
  return (
    <div className="top-bar">

      {/*
      Left side of the Nav bar.
      */}
      <div className="top-bar-left">
        <ul className="menu">

          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/"
                activeClassName="active-link">
              Timer
            </IndexLink>
          </li>
          <li>
            <Link to="/countdown"
                activeClassName="active-link">
              Countdown
            </Link>
          </li>

        </ul>
      </div>

      {/*
      Right side of the Nav bar.
      */}
      <div className="top-bar-right">
        <ul className="menu">

          <li className="menu-text">
              Created by&nbsp;
            <a href="https://github.com/NFiorentini"
                target="_blank">
              NFiorentini
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
