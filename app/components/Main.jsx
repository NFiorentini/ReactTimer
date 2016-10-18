const Navigation          = require('Navigation');
const React               = require('react');

const Main = (props) => {

  return (
    <div>
      <Navigation/>
      <div className="row">

        <div className="column small-centered
            medium-6 large-4">
          {props.children}
        </div>

      </div>
    </div>
  );
}

module.exports = Main;
