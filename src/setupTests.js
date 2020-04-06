import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
const scroll = () => {}
Object.defineProperty(window, 'scrollTo', { value: scroll, writable: true })
