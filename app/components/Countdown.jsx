const Clock                      = require('Clock');
const Controls                   = require('Controls');
const CountdownForm              = require('CountdownForm');
const React                      = require('react');

const Countdown = React.createClass({

  getInitialState: function () {
    return {
      count: 0,

      /*
      countdownStatus can be either stopped, started,
      or paused.
      */
      countdownStatus: 'stopped'
    };
  },

  /*
  Lifecycle methods are called automatically by
  React when certain things happen to your component.
  componentDidUpdate() is called after props or state
  are updated, & is passed the previous props & the
  previous state.
  */
  componentDidUpdate: function (prevProps, prevState) {

    /*
    Test if the countdownStatus has changed.
    */
    if(this.state.countdownStatus !==
        prevState.countdownStatus) {

      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;

        // case 'stopped' doesn't have a break.
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer: function () {

    /*
    setInterval() takes a function & a time in ms.
    */
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;

      this.setState({

        /*
        Never set the count to less than 0.
        */
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },

  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,

      /*
      countdownStatus: 'started' tells the app to
      start the countdown process.
      */
      countdownStatus: 'started'
    });
  },

  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },

  render: function () {
    const {count, countdownStatus} = this.state;

    /*
    renderControlArea() is in charge of rendering either
    the Controls component or the CountdownForm component.
    */
    const renderControlArea = () => {

      if (countdownStatus !== 'stopped') {

        return <Controls countdownStatus={countdownStatus}
            onStatusChange={this.handleStatusChange}/>;

      } else {

        return <CountdownForm onSetCountdown=
            {this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
