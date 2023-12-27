const { expect } = require('chai');
const { shallow } = require('enzyme');
const React = require('react');
const App = require('../App');

// Test Suite
describe('App', function() {
    it('renders without crashing', function() {
        shallow(<App />);
    });

    it('initially shows a button to call API', function() {
        const wrapper = shallow(<App />);
        expect(wrapper.find('button').text()).to.equal('Click to Call API');
    });

    // Add more test cases as per your project's requirements
});
