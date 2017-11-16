import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'whatwg-fetch'
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}

Enzyme.configure({ adapter: new Adapter() })
