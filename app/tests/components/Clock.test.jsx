const Clock            = require('Clock');
const expect           = require('expect');
const React            = require('react');
const ReactDOM         = require('react-dom');
const TestUtils        = require('react-addons-test-utils');
const $                = require('jQuery');

/*
describe() allows you to group your tests
& to name that group.
*/
describe('Clock', () => {

  it('should exist', () => {

    /*
    Multple assertions can be made inside of it().
    */
    expect(Clock).toExist();
  });

  /*
  All tests for the render() method are housed here.
  */
  describe('render', () => {

    it('should render clock to output', () => {

      const clock = TestUtils.renderIntoDocument(
          <Clock totalSeconds={62}/>);

      /*
      $el stores the element's DOM root.
      */
      const $el = $(ReactDOM.findDOMNode(clock));
      const actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {

    it('should format seconds', () => {

      /*
      We want to access formatSeconds(). TestUtils
      allows us to render the component so that we can
      access Clock's methods.
      */
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      const seconds = 615;
      const expected = '10:15';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it(('should format seconds when min/sec are ' +
        'less than 10'), () => {

      const clock = TestUtils.renderIntoDocument(<Clock/>);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
