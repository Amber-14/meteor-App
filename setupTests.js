const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

configure({ adapter: new Adapter() });

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;
