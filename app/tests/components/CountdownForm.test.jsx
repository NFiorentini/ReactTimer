const CountdownForm   = require('CountdownForm');
const expect          = require('expect');
const React           = require('react');
const ReactDOM        = require('react-dom');
const TestUtils       = require('react-addons-test-utils');
const $               = require('jQuery');

/*
describe() defines a group whose name is
CountdownForm, & there can be as many it()
methods as is needed.
*/
describe('CountdownForm', () => {

  // We get a valid variable back.
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  // Test for good data.
  it('should call onSetCountdown if valid seconds entered', () => {

    const spy = expect.createSpy();

    const countdownForm = TestUtils.renderIntoDocument(
        <CountdownForm onSetCountdown={spy}/>);

    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  // Test for bad data.
  it('should not call onSetCountdown if invalid seconds entered', () => {

    const spy = expect.createSpy();

    const countdownForm = TestUtils.renderIntoDocument(
        <CountdownForm onSetCountdown={spy}/>);

    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109b';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
