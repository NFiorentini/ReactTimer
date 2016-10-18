const Clock                           = require('Clock');
const Controls                        = require('Controls');
const React                           = require('react');

const Timer  = React.createClass({

  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },

  componentDidUpdate: function (prevProps, prevState) {

    if (this.state.timerStatus !== prevState.timerStatus) {

      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;

        // No break here.
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  /*
  componentWillUpdate(), componentWillMount(), &
  componentDidMount() are here to demonstrate
  additional React Lifecycle methods.

  componentWillUpdate: function (nextProps, nextState) {
    console.log('Timer will update!');
  },

  componentWillMount: function () {
    console.log('Timer will mount!');
  },

  componentDidMount: function () {
    console.log('Timer did mount!');
  },
  */

  componentWillUnmount: function () {
    // console.log('Timer did unmount!!!');

    clearInterval(this.timer);
  },

  handleStart: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },

  handleStatusChange: function (newTimerStatus) {
    // console.log(newTimerStatus);
    
    this.setState({timerStatus: newTimerStatus});
  },

  render: function () {
    const {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus}
            onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
