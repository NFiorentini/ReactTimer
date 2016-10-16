var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

// describe() defines a group whose name is
// CountdownForm, & there can be as many it()
// methods as is needed.
describe('CountdownForm', () => {

  // We get a valid variable back.
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  // Test for good data.
  it('should call onSetCountdown if valid seconds entered', () => {

    var spy = expect.createSpy();

    var countdownForm = TestUtils.renderIntoDocument(
        <CountdownForm onSetCountdown={spy}/>);

    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  // Test for bad data.
  it('should not call onSetCountdown if invalid seconds entered', () => {

    var spy = expect.createSpy();

    var countdownForm = TestUtils.renderIntoDocument(
        <CountdownForm onSetCountdown={spy}/>);

    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109b';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
