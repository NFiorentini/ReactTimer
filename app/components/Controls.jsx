const React          = require('react');

const Controls = React.createClass({

  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  /*
  The Currying Pattern uses a function to generate a
  different function. This allows us to have a single
  function instead of separate functions started, paused,
  & stopped.
  */
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render: function () {
    const {countdownStatus} = this.props;

    const renderStartStopButton = () => {

      if (countdownStatus === 'started') {

        return (
          <button className="button secondary"
              onClick={this.onStatusChange('paused')}>
            Pause
          </button>
        );
      } else {

        return (
          <button className="button primary"
              onClick={this.onStatusChange('started')}>
            Start
          </button>
        );
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow"
            onClick={this.onStatusChange('stopped')}>
          Clear
        </button>
      </div>
    )
  }
});

module.exports = Controls;
