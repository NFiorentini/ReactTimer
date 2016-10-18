const Controls         = require('Controls');
const expect           = require('expect');
const React            = require('react');
const ReactDOM         = require('react-dom');
const TestUtils        = require('react-addons-test-utils');
const $                = require('jQuery');

describe('Controls', () => {

  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {

    it('should render pause when started', () => {

      const controls = TestUtils
          .renderIntoDocument(
              <Controls countdownStatus="started"/>);

      const $el = $(ReactDOM.findDOMNode(controls));

      /*
      jQuery's :contains() filter allows you search
      the DOM for a target with the given text value.
      */
      const $pauseButton =
          $el.find('button:contains(Pause)');

      /*
      We expect there to be only one pauseButton.
      */
      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {

      const controls = TestUtils
          .renderIntoDocument(
              <Controls countdownStatus="paused"/>);

      const $el = $(ReactDOM.findDOMNode(controls));

      const $startButton =
          $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
